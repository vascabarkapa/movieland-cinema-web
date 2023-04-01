const mongoose = require("mongoose");

const repertorySchema = mongoose.Schema({
        movie: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Movie',
            required: [true, "Movie is required"]
        },
        dateTime: {
            type: Date,
            required: [true, "Date and Time are required"],
            default: Date.now()
        },
        number_of_tickets: {
            type: Number,
            required: [true, "Number of tickets are required"],
            default: 220
        },
        price: {
            type: Number,
            required: [true, "Price is required"]
        },
    }, {
        timestamps: true
    }
);

module.exports = mongoose.model("Repertory", repertorySchema);