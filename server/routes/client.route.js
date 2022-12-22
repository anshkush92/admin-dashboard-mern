const express = require("express");

const { getProducts } = require("../controllers/client.controller.js");

const router = express.Router();

router.get("/products", getProducts);

module.exports = router;
