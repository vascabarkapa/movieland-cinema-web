import { get, post, put, remove } from "./api-client";

const ENDPOINT = "/movies";

function getMovies() {
    return get(ENDPOINT);
}

function getMovieById(id) {
    return get(ENDPOINT + "/" + id);
}

function createMovie(movie) {
    return post(ENDPOINT, movie);
}

function updateMovie(id, movie) {
    return put(ENDPOINT + "/" + id, movie);
}

function deleteMovie(id) {
    return remove(ENDPOINT + "/" + id);
}

const MovieService = {
    getMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
}

export default MovieService;