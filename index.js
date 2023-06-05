const express = require("express");
const bodyParser = require("body-parser");
const { Sequelize } = require("sequelize");

const router = require("./routes");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1", router);

const sequelize = new Sequelize("ww", "root", "password", {
  dialect: "mysql",
  dialectOptions: {
    socketPath: "/var/run/mysqld/mysqld.sock",
  },
});

// listening port
app.listen(8001, async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    console.log("server running on http://localhost:8000");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
