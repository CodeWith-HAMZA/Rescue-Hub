const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Content = sequelize.define(
  "Content",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    key: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    page: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    // Include timestamps
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    // Define the table name
    tableName: "Content",
  }
);

module.exports = Content;
