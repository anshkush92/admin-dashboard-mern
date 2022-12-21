const express = require("express");

import { getUser } from "../controllers/general.controller";

const router = express.Router();

router.get("/user/:id", getUser);

module.exports = router;
