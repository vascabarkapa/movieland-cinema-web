import { get, post } from "./api-client";

const ENDPOINT = "/tickets";

function getTickets() {
    return get(ENDPOINT);
}

function getTicketById(id) {
    return get(ENDPOINT + "/" + id);
}

function createTicket(ticket) {
    return post(ENDPOINT, ticket);
}

const TicketService = {
    getTickets,
    getTicketById,
    createTicket
}

export default TicketService;