const asyncHandler = require("express-async-handler");
const Repertory = require("../models/repertoryModel");

//@desc Get all movies from repertory
//@route GET /api/repertories
//@access private
const getMoviesFromRepertory = asyncHandler(async (req, res) => {
    const moviesFromRepertory = await Repertory.find().populate("movie");
    const sortedMoviesFromRepertory = moviesFromRepertory.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    res.status(200).json(sortedMoviesFromRepertory);
});

//@desc Get movie by id from repertory
//@route GET /api/repertories/:id
//@access private
const getMovieByIdFromRepertory = asyncHandler(async (req, res) => {
    const movieByIdFromRepertory = await Repertory.findById(req.params.id).populate("movie");
    if (!movieByIdFromRepertory) {
        res.status(404);
        throw new Error("Movie not found");
    }

    res.status(200).json(movieByIdFromRepertory);
});

//@desc Add movie to repertory
//@route POST /api/repertories
//@access private
const addMovieToRepertory = asyncHandler(async (req, res) => {
    for (let prop in req.body) {
        if (!req.body[prop]) {
            res.status(400);
            throw new Error(prop + " is mandatory field");
        }
    }

    const newMovieToRepertory = await Repertory.create(req.body);
    res.status(201).json(newMovieToRepertory);
});

//@desc Update movie in repertory
//@route PUT /api/repertories/:id
//@access private
const updateMovieFromRepertory = asyncHandler(async (req, res) => {
    const movieFromRepertory = await Repertory.findById(req.params.id);
    if (!movieFromRepertory) {
        res.status(404);
        throw new Error("Movie from Repertory not found");
    }

    const updatedMovieFromRepertory = await Repertory.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedMovieFromRepertory);
});

//@desc Delete movie from repertory
//@route DELETE /api/repertories/:id
//@access private
const deleteMovieFromRepertory = asyncHandler(async (req, res) => {
    const movieFromRepertory = await Repertory.findById(req.params.id);
    if (!movieFromRepertory) {
        res.status(404);
        throw new Error("Movie from Repertory not found");
    }

    const deletedMovieFromRepertory = await Repertory.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedMovieFromRepertory);
});

module.exports = {
    getMoviesFromRepertory,
    getMovieByIdFromRepertory,
    addMovieToRepertory,
    updateMovieFromRepertory,
    deleteMovieFromRepertory
};
