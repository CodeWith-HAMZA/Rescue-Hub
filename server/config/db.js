const Sequelize = require("sequelize");

// Replace the values below with your own database credentials
const sequelize = new Sequelize("rescue", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the   :", error);
  });

exports.sequelize = sequelize;
exports.Sequelize = Sequelize;
