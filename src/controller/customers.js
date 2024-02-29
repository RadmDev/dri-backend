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

const getCustomerById = async (req, res) => {
  const { customerId } = req.params;

  try {
    const [data] = await CustomersModel.getCustomerById(customerId);

    res.json({
      message: "GET customer success",
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

const addMenuToFavorite = async (req, res) => {
  const { customerId } = req.params;
  const { menuId } = req.body;

  try {
    await CustomersModel.addMenuToFavorite(customerId, menuId);
    res.json({
      message: "Add menu to favorite success",
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
  getCustomerById,
  createNewCustomer,
  updateCustomer,
  deleteCustomer,
  addMenuToFavorite,
};
