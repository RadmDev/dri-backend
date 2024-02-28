const express = require("express");
const CustomerController = require("../controller/customers");

const router = express.Router();

// create customer
router.post("/", CustomerController.createNewCustomer);

// read all customers
router.get("/", CustomerController.getAllCustomers);

// update customer
router.patch("/:customerId", CustomerController.updateCustomer);

// delete customer
router.delete("/:customerId", CustomerController.deleteCustomer);

module.exports = router;
