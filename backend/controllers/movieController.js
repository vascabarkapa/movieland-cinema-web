const asyncHandler = require("express-async-handler");
const Movie = require("../models/movieModel");

//@desc Get all movies
//@route GET /api/movies
//@access private
const getMovies = asyncHandler(async (req, res) => {
    const movies = await Movie.find();
    const sortedMovies = movies.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
    res.status(200).json(sortedMovies);
});

//@desc Get movie by id
//@route GET /api/movies/:id
//@access private
const getMovieById = asyncHandler(async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
        res.status(404);
        throw new Error("Movie not found");
    }

    res.status(200).json(movie);
});

//@desc Create movie
//@route POST /api/movies
//@access private
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
//@access private
const updateMovie = asyncHandler(async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
        res.status(404);
        throw new Error("Movie not found");
    }

    const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedMovie);
});

//@desc Delete movie by id
//@route DELETE /api/movies/:id
//@access private
const deleteMovie = asyncHandler(async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
        res.status(404);
        throw new Error("Movie not found");
    }

    const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedMovie);
});

module.exports = { getMovies, getMovieById, createMovie, updateMovie, deleteMovie };
