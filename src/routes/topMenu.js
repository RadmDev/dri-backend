const express = require("express");
const MenuController = require("../controller/menu");

const router = express.Router();

// get top menu
router.get("/", MenuController.getTopMenu);

module.exports = router;
