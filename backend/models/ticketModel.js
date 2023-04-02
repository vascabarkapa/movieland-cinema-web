const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema({
        repertory: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Repertory',
            required: [true, "Repertory is required"]
        },
        first_name: {
            type: String,
            required: [true, "First Name is required"]
        },
        last_name: {
            type: String,
            required: [true, "Last Name is required"]
        },
        email: {
            type: String,
            required: [true, "Email is required"]
        },
        phone_number: {
            type: String,
            required: [true, "Phone Number is required"]
        },
        address: {
            type: String,
            required: [true, "Address is required"]
        },
        city: {
            type: String,
            required: [true, "City is required"]
        },
        country: {
            type: String,
            required: [true, "Country is required"]
        },
        card_type: {
            type: String,
            required: [true, "Card Type is required"]
        },
        card_number: {
            type: String,
            required: [true, "Card Number is required"]
        },
        card_date_expiry: {
            type: String,
            required: [true, "Card Date Expiry is required"]
        },
        card_ccv: {
            type: String,
            required: [true, "Card CCV is required"]
        },
        number_of_tickets: {
            type: Number,
            required: [true, "Number of tickets is required"]
        },
        sum_price: {
            type: Number,
            required: [true, "Sum price is required"]
        },
    }, {
        timestamps: true
    }
);

module.exports = mongoose.model("Ticket", ticketSchema);