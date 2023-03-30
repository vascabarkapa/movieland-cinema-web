const express = require("express");
const router = express.Router();
const { getCount } = require("../controllers/dashboardController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
router.route("/").get(getCount);

module.exports = router;