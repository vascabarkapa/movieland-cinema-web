const asyncHandler = require("express-async-handler");

//@desc Login user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
    res.json({message: "Login user"})
});

//@desc Get current user
//@route GET /api/users/current
//@access public
const currentUser = asyncHandler(async (req, res) => {
    res.json({message: "Current user"})
});

module.exports = {loginUser, currentUser}