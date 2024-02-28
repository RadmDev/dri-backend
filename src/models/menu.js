const dbPool = require("../config/database");

const getAllMenu = () => {
  const SQLQuery = "SELECT * FROM menu";

  return dbPool.execute(SQLQuery);
};

const createNewMenu = (body) => {
  const SQLQuery = `INSERT INTO menu (menu_name, price) VALUES ('${body.menu_name}', '${body.price}')`;

  return dbPool.execute(SQLQuery);
};

const updateMenu = (body, menuId) => {
  const SQLQuery = `UPDATE menu SET menu_name = '${body.menu_name}', price = '${body.price}' WHERE id = '${menuId}'`;

  return dbPool.execute(SQLQuery);
};

const deleteMenu = (menuId) => {
  const SQLQuery = `DELETE FROM menu WHERE id = '${menuId}'`;

  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllMenu,
  createNewMenu,
  updateMenu,
  deleteMenu,
};
