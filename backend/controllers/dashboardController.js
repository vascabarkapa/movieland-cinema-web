const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Movie = require("../models/movieModel");
const Ticket = require("../models/ticketModel");

//@desc Get all number of models
//@route GET /api/dashboard
//@access private
const getCount = asyncHandler(async (req, res) => {
    const movies = await Movie.find();
    const users = await User.find();
    const tickets = await Ticket.find();

    res.status(200).json({ repertories: 1, movies: movies?.length, tickets: tickets?.length, users: users?.length });
});

module.exports = { getCount };
