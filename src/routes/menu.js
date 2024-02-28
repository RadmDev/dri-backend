const express = require("express");
const MenuController = require("../controller/menu");

const router = express.Router();

// create customer
router.post("/", MenuController.createNewMenu);

// read all customers
router.get("/", MenuController.getAllMenu);

// update customer
router.patch("/:menuId", MenuController.updateMenu);

// delete customer
router.delete("/:menuId", MenuController.deleteMenu);

module.exports = router;
