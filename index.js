const express = require("express");
const bodyParser = require("body-parser");
const { Sequelize } = require("sequelize");

const router = require("./routes");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1", router);

const sequelize = new Sequelize("wander_wisely", "root", "wander3306wisely", {
  // dialectOptions: {
  //   socketPath: "/var/run/mysqld/mysqld.sock",
  // },
  host: "34.101.227.234",
  port: "3306",
  dialect: "mysql",
});

// listening port
app.listen(8000, async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    console.log("server running on http://localhost:9000");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
