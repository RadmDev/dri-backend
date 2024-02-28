const CustomersModel = require("../models/customers");

const getAllCustomers = async (req, res) => {
  try {
    const [data] = await CustomersModel.getAllCustomers();

    res.json({
      message: "GET all customers success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      serverMessage: error,
    });
  }
};

const createNewCustomer = async (req, res) => {
  const { body } = req;

  try {
    await CustomersModel.createNewCustomer(body);
    res.json({
      message: " Create new customer success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      serverMessage: error,
    });
  }
};

const updateCustomer = async (req, res) => {
  const { customerId } = req.params;
  const { body } = req;
  try {
    await CustomersModel.updateCustomer(body, customerId);
    res.json({
      message: "PATCH customer success",
      data: { id: customerId, ...body },
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      serverMessage: error,
    });
  }
};

const deleteCustomer = async (req, res) => {
  const { customerId } = req.params;
  try {
    await CustomersModel.deleteCustomer(customerId);
    res.json({
      message: "DELETE customer success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllCustomers,
  createNewCustomer,
  updateCustomer,
  deleteCustomer,
};
