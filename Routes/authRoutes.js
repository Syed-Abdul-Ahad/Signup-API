const authController = require("./../Controller/authController")
const express = require ("express")

const router = express.Router()

router.post("/signup",authController.signUp)

module.exports = router;
