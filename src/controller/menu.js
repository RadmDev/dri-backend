const MenuModel = require("../models/menu");

const getAllMenu = async (req, res) => {
  try {
    const [data] = await MenuModel.getAllMenu();

    res.json({
      message: "GET all menu success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      serverMessage: error,
    });
  }
};

const getMenuById = async (req, res) => {
  const { menuId } = req.params;

  try {
    const [data] = await MenuModel.getMenuById(menuId);

    res.json({
      message: "GET menu success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      serverMessage: error,
    });
  }
};

const createNewMenu = async (req, res) => {
  const { body } = req;

  try {
    await MenuModel.createNewMenu(body);
    res.json({
      message: " Create new menu success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      serverMessage: error,
    });
  }
};

const updateMenu = async (req, res) => {
  const { menuId } = req.params;
  const { body } = req;
  try {
    await MenuModel.updateMenu(body, menuId);
    res.json({
      message: "Edit menu success",
      data: { id: menuId, ...body },
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      serverMessage: error,
    });
  }
};

const deleteMenu = async (req, res) => {
  const { menuId } = req.params;
  try {
    await MenuModel.deleteMenu(menuId);
    res.json({
      message: "DELETE menu success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      serverMessage: error,
    });
  }
};

const addMenuLike = async (req, res) => {
  const { menuId } = req.params;

  try {
    await MenuModel.addMenuLike(menuId);
    res.json({
      message: "Add menu like success",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      serverMessage: error,
    });
  }
};

const getTopMenu = async (req, res) => {
  try {
    const [data] = await MenuModel.getTopMenu();

    res.json({
      message: "GET top menu success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllMenu,
  getMenuById,
  getTopMenu,
  createNewMenu,
  updateMenu,
  deleteMenu,
  addMenuLike,
};
