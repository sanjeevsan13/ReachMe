const express = require('express');
const router = express.Router();
const AuthController = require('./../controllers/authController')
console.log("in the Routes")
router.route("/user").post(AuthController.signup);

module.exports = router;