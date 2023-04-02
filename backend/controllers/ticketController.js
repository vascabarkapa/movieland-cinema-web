const asyncHandler = require("express-async-handler");
const Ticket = require("../models/ticketModel");

//@desc Get all tickets
//@route GET /api/tickets
//@access private
const getTickets = asyncHandler(async (req, res) => {
    const tickets = await Ticket.find().populate("repertory");
    const sortedTickets = tickets.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
    res.status(200).json(sortedTickets);
});

//@desc Get ticket by id
//@route GET /api/tickets/:id
//@access private
const getTicketById = asyncHandler(async (req, res) => {
    const ticket = await Ticket.findById(req.params.id).populate("repertory");
    if (!ticket) {
        res.status(404);
        throw new Error("Ticket not found");
    }

    res.status(200).json(ticket);
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

    const newTicket = await Ticket.create(req.body);
    res.status(201).json(newTicket);
});


module.exports = { getTickets, getTicketById, createTicket };
