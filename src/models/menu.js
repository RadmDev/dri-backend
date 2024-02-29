const dbPool = require("../config/database");

const getAllMenu = () => {
  const SQLQuery = "SELECT * FROM menu";

  return dbPool.execute(SQLQuery);
};

const getMenuById = (menuId) => {
  const SQLQuery = `SELECT * FROM menu WHERE id = ${menuId}`;

  return dbPool.execute(SQLQuery);
};

const createNewMenu = (body) => {
  const SQLQuery = `INSERT INTO menu (menu_name, price, likes) VALUES ('${body.menu_name}', '${body.price}', 0)`;

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

const addMenuLike = (menuId) => {
  const SQLQuery = `UPDATE menu SET likes = likes + 1 WHERE id = '${menuId}'`;

  return dbPool.execute(SQLQuery);
};

const getTopMenu = () => {
  const SQLQuery = `SELECT * FROM menu ORDER BY likes DESC LIMIT 5`;

  return dbPool.execute(SQLQuery);
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
