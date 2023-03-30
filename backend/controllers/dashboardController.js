const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Movie = require("../models/movieModel");

//@desc Get all number of models
//@route GET /api/dashboard
//@access private
const getCount = asyncHandler(async (req, res) => {
    const movies = await Movie.find();
    const users = await User.find();

    res.status(200).json({ movies: movies?.length, users: users?.length });
});

module.exports = { getCount };
