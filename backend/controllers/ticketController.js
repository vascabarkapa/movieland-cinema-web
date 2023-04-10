var aes256 = require('aes256');

const asyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer");
const fs = require('fs');
const Ticket = require("../models/ticketModel");
const Repertory = require('../models/repertoryModel');

//@desc Get all tickets
//@route GET /api/tickets
//@access private
const getTickets = asyncHandler(async (req, res) => {
    const tickets = await Ticket.find().populate({
        path: 'repertory',
        populate: {
            path: 'movie',
        },
    });

    const sortedTickets = tickets.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    res.status(200).json(sortedTickets);
});

//@desc Get ticket by id
//@route GET /api/tickets/:id
//@access private
const getTicketById = asyncHandler(async (req, res) => {
    const ticket = await Ticket.findById(req.params.id).populate({
        path: 'repertory',
        populate: {
            path: 'movie',
        },
    });

    if (!ticket) {
        res.status(404);
        throw new Error("Ticket not found");
    }

    const { email, card_type, card_number, card_date_expiry, card_ccv } = ticket;
    const key = email;

    const decryptedCardType = aes256.decrypt(key, card_type);
    const decryptedCardNumber = aes256.decrypt(key, card_number);
    const decryptedCardDateExpiry = aes256.decrypt(key, card_date_expiry);
    const decryptedCardCcv = aes256.decrypt(key, card_ccv);

    const decryptedTicket = {
        ...ticket.toJSON(),
        card_type: decryptedCardType,
        card_number: decryptedCardNumber,
        card_date_expiry: decryptedCardDateExpiry,
        card_ccv: decryptedCardCcv
    };

    res.status(200).json(decryptedTicket);
});

//@desc Create ticket
//@route POST /api/tickets
//@access private
const createTicket = asyncHandler(async (req, res) => {
    for (let prop in req.body) {
        if (!req.body[prop]) {
            res.status(400);
            throw new Error(prop + " is mandatory field");
        }
    }

    const key = req.body.email;
    const encryptedFields = ['card_type', 'card_number', 'card_date_expiry', 'card_ccv'];

    encryptedFields.forEach((field) => {
        req.body[field] = aes256.encrypt(key, req.body[field]);
    });

    const repertoryToBuy = await Repertory.findById({ _id: req.body.repertory }).populate("movie");
    if (!repertoryToBuy) {
        res.status(404);
        throw new Error("Repertory Movie not found");
    }

    if (repertoryToBuy.number_of_tickets - req.body["number_of_tickets"] >= 0) {
        repertoryToBuy.number_of_tickets = repertoryToBuy.number_of_tickets - req.body["number_of_tickets"];
        repertoryToBuy.save();
    } else {
        res.status(404);
        throw new Error("Purchase is not possible! " + repertoryToBuy.number_of_tickets + " cards left.");
    }

    const newTicket = await Ticket.create(req.body);

    // sending email
    const htmlTemplate = fs.readFileSync('./config/purchaseConfirmation.html', 'utf8');
    const emailContent = htmlTemplate
        .replace('[Name]', newTicket?.first_name + " " + newTicket?.last_name)
        .replace('[number of tickets]', newTicket?.number_of_tickets)
        .replace('[movie title]', repertoryToBuy?.movie?.name)
        .replace('[date]', repertoryToBuy?.dateTime.toLocaleString('sr-RS', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }))
        .replace('[time]', repertoryToBuy?.dateTime)
        .replace('[order number]', repertoryToBuy?._id)
        .replace('[total]', newTicket?.sum_price)
        .replace('[date purchase]', newTicket?.createdAt.toLocaleString('sr-RS', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }));

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: 'vascabarkapa@gmail.com',
            pass: 'dyzehgtjozwodlqn',
        },
    });

    let info = await transporter.sendMail({
        from: 'Movieland Cinema',
        to: newTicket?.email,
        subject: "Purchase confirmation No: " + repertoryToBuy?._id,
        html: emailContent
    });

    res.status(201).json(newTicket);
});


module.exports = { getTickets, getTicketById, createTicket };
