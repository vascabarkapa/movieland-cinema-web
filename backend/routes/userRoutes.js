const express = require("express");
const {loginUser, currentUser} = require("../controllers/userController");
const router = express.Router();

router.route("/login").post(loginUser);
router.route("/current").get(currentUser);

module.exports = router;