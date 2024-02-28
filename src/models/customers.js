const dbPool = require("../config/database");

const getAllCustomers = () => {
  const SQLQuery = "SELECT * FROM customers";

  return dbPool.execute(SQLQuery);
};

const createNewCustomer = (body) => {
  const SQLQuery = `INSERT INTO customers (name, level, total_transaction) VALUES ('${body.name}', '${body.level}', '${body.total_transaction}')`;

  return dbPool.execute(SQLQuery);
};

const updateCustomer = (body, customerId) => {
  const SQLQuery = `UPDATE customers SET name = '${body.name}', level = '${body.level}', total_transaction = '${body.total_transaction}' WHERE id = '${customerId}'`;

  return dbPool.execute(SQLQuery);
};

const deleteCustomer = (customerId) => {
  const SQLQuery = `DELETE FROM customers WHERE id = '${customerId}'`;

  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllCustomers,
  createNewCustomer,
  updateCustomer,
  deleteCustomer,
};
