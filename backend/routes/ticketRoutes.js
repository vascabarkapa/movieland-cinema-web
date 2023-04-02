const express = require("express");
const router = express.Router();
const { getTickets, getTicketById, createTicket } = require("../controllers/ticketController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
router.route("/").get(getTickets).post(createTicket);
router.route("/:id").get(getTicketById);

module.exports = router;