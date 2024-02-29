const express = require("express");
const CustomerController = require("../controller/customers");

const router = express.Router();

// create customer
router.post("/", CustomerController.createNewCustomer);

// read all customers
router.get("/", CustomerController.getAllCustomers);

// read customer by id
router.get("/:customerId", CustomerController.getCustomerById);

// update customer
router.patch("/:customerId", CustomerController.updateCustomer);

// delete customer
router.delete("/:customerId", CustomerController.deleteCustomer);

// add menu to favorite
router.patch("/:customerId/favorite", CustomerController.addMenuToFavorite);

module.exports = router;
