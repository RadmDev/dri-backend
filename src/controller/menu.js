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

module.exports = {
  getAllMenu,
  createNewMenu,
  updateMenu,
  deleteMenu,
};
