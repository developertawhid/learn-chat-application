// external imports 
const express = require("express");

// internal imports 
const { getLogin } = require("../controllers/loginControllers");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const router  = express.Router();

// login page 
router.get("/", decorateHtmlResponse("Login"), getLogin);

module.exports = router;