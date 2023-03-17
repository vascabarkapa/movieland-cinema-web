//@desc Get all movies
//@route GET /api/movies
//@access public
const getMovies = (req, res) => {
    res.status(200).json({message: "Get all movies"});
};

//@desc Get movie by id
//@route GET /api/movies/:id
//@access public
const getMovieById = (req, res) => {
    res.status(200).json({message: `Get movie id: ${req.params.id}`});
};

//@desc Create movie
//@route POST /api/movies
//@access public
const createMovie = (req, res) => {
    const {name, rating} = req.body;
    if (!name || !rating) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    res.status(201).json({message: "Create movie"});
};

//@desc Update movie by id
//@route PUT /api/movies/:id
//@access public
const updateMovie = (req, res) => {
    res.status(200).json({message: `Update movie id: ${req.params.id}`});
};

//@desc Delete movie by id
//@route DELETE /api/movies/:id
//@access public
const deleteMovie = (req, res) => {
    res.status(200).json({message: `Delete movie id: ${req.params.id}`});
};

module.exports = {getMovies, getMovieById, createMovie, updateMovie, deleteMovie};