const express = require("express");
const MenuController = require("../controller/menu");

const router = express.Router();

// create customer
router.post("/", MenuController.createNewMenu);

// read all customers
router.get("/", MenuController.getAllMenu);

// read customer by id
router.get("/:menuId", MenuController.getMenuById);

// update customer
router.patch("/:menuId", MenuController.updateMenu);

// delete customer
router.delete("/:menuId", MenuController.deleteMenu);

// add menu like
router.patch("/:menuId/like", MenuController.addMenuLike);

module.exports = router;
