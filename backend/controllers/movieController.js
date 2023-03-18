const asyncHandler = require("express-async-handler");
const Movie = require("../models/movieModel");

//@desc Get all movies
//@route GET /api/movies
//@access public
const getMovies = asyncHandler(async (req, res) => {
    const movies = await Movie.find();
    res.status(200).json(movies);
});

//@desc Get movie by id
//@route GET /api/movies/:id
//@access public
const getMovieById = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Get movie id: ${req.params.id}`});
});

//@desc Create movie
//@route POST /api/movies
//@access public
const createMovie = asyncHandler(async (req, res) => {
    for (let prop in req.body) {
        if (!req.body[prop]) {
            res.status(400);
            throw new Error(prop + " is mandatory field");
        }
    }

    const newMovie = await Movie.create(req.body);
    res.status(201).json(newMovie);
});

//@desc Update movie by id
//@route PUT /api/movies/:id
//@access public
const updateMovie = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update movie id: ${req.params.id}`});
});

//@desc Delete movie by id
//@route DELETE /api/movies/:id
//@access public
const deleteMovie = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete movie id: ${req.params.id}`});
});

module.exports = {getMovies, getMovieById, createMovie, updateMovie, deleteMovie};
