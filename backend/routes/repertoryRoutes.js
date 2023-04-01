const express = require("express");
const router = express.Router();
const {
    getMoviesFromRepertory,
    getMovieByIdFromRepertory,
    addMovieToRepertory,
    updateMovieFromRepertory,
    deleteMovieFromRepertory
} = require("../controllers/repertoryController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
router.route("/").get(getMoviesFromRepertory).post(addMovieToRepertory);
router.route("/:id").get(getMovieByIdFromRepertory).put(updateMovieFromRepertory).delete(deleteMovieFromRepertory);

module.exports = router;