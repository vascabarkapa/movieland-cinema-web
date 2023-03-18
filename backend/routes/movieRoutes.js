const express = require("express");
const router = express.Router();
const {getMovies, getMovieById, createMovie, updateMovie, deleteMovie} = require("../controllers/movieController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
router.route("/").get(getMovies).post(createMovie);
router.route("/:id").get(getMovieById).put(updateMovie).delete(deleteMovie);

module.exports = router;