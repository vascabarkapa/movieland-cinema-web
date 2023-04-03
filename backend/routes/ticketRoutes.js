const express = require("express");
const router = express.Router();
const { getTickets, getTicketById, createTicket } = require("../controllers/ticketController");
const validateToken = require("../middleware/validateTokenHandler");

router.route("/").post(createTicket);

router.use(validateToken);
router.route("/").get(getTickets);
router.route("/:id").get(getTicketById);

module.exports = router;