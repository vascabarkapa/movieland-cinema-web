const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
    res.status(200).json({message: "Get all movies"});
});

router.route("/:id").get((req, res) => {
    res.status(200).json({message: `Get movie id: ${req.params.id}`});
});

router.route("/").post((req, res) => {
    res.status(200).json({message: "Create new movie"});
});

router.route("/:id").put((req, res) => {
    res.status(200).json({message: `Update movie id: ${req.params.id}`});
});

router.route("/:id").delete((req, res) => {
    res.status(200).json({message: `Delete movie id: ${req.params.id}`});
});

module.exports = router;