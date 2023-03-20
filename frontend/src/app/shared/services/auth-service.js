import { post } from './api-client'

const ENDPOINT = `/auth`;

function login(username, password) {
    const body = {
        username,
        password,
    }

    return post(ENDPOINT, body);
}

export { login }