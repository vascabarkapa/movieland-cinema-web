import { get, post, put, remove } from "./api-client";

const ENDPOINT = "/repertories";

function getMoviesFromRepertory() {
    return get(ENDPOINT);
}

function getMovieByIdFromRepertory(id) {
    return get(ENDPOINT + "/" + id);
}

function addMovieToRepertory(repertory) {
    return post(ENDPOINT, repertory);
}

function updateMovieFromRepertory(id, repertory) {
    return put(ENDPOINT + "/" + id, repertory);
}

function deleteMovieFromRepertory(id) {
    return remove(ENDPOINT + "/" + id);
}

const RepertoryService = {
    getMoviesFromRepertory,
    getMovieByIdFromRepertory,
    addMovieToRepertory,
    updateMovieFromRepertory,
    deleteMovieFromRepertory
}

export default RepertoryService;