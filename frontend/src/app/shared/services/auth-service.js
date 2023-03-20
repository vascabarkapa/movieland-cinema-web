import { get, post } from "./api-client";

const ENDPOINT = "/auth";

function login(username, password) {
    const body = {
        username,
        password,
    }

    return post(ENDPOINT + "/login", body);
}

function currentUser() {
    return get(ENDPOINT + "/current");
}

export { login }