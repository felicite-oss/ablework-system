const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/register/applicant", authController.registerApplicant);

module.exports = router;