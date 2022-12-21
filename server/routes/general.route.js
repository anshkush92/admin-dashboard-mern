const express = require("express");

const { getUser } = require("../controllers/general.controller");

const router = express.Router();

router.get("/user/:id", getUser);

module.exports = router;
