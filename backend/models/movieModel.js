const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
        name: {
            type: String,
            required: [true, "Movie name is required"]
        },
        genre: {
            type: String,
            required: [true, "Genre is required"]
        },
        duration: {
            type: String,
            required: [true, "Duration is required"]
        },
        rating: {
            type: Number,
            required: [true, "Rating is required"]
        },
        description: {
            type: String,
            required: [true, "Description is required"]
        },
        direction: {
            type: String,
            required: [true, "Direction is required"]
        },
        actors: {
            type: String,
            required: [true, "Actors are required"]
        },
    }, {
        timestamps: true
    }
);

module.exports = mongoose.model("Movie", movieSchema);