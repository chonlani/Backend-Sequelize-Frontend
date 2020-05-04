const express = require("express");
const usercontollers = require('../contoller/user');
const router = express.Router();

router.post("/register", usercontollers.registerUser);
router.post("/login", usercontollers.loginUser);

module.exports = router;