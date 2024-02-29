require("dotenv").config();
const express = require("express");
const customerRoutes = require("./routes/customers");
const menuRoutes = require("./routes/menu");
const topMenuRoutes = require("./routes/topMenu");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// cors middleware
app.use(cors());

// body parser
app.use(express.json());

// routes
app.use("/customers", customerRoutes);
app.use("/menu", menuRoutes);
app.use("/topMenu", topMenuRoutes);

app.listen(PORT, () => {
  console.log(`Server berhasil dijalankan pada port ${PORT}`);
});
