const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const User = require("./user");

const Application = sequelize.define(
  "Application",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("pending", "processing", "eligible", "not_eligible"),
      allowNull: false,
      defaultValue: "pending",
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Common fields
    contactName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contactPhone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contactEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    // Earthquake specific fields
    magnitude: {
      type: DataTypes.FLOAT, // Adjust data type as needed
      allowNull: true,
    },
    earthquakeLocation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    earthquakeDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    // Flood specific fields
    floodSeverity: {
      type: DataTypes.ENUM("Minor", "Moderate", "Severe"),
      allowNull: true,
    },
    floodLocation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    floodDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    // Disable Sequelize's pluralization of model names
    // freezeTableName: true,

    // Include timestamps
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

Application.belongsTo(User, { foreignKey: "userId" });

module.exports = Application;
