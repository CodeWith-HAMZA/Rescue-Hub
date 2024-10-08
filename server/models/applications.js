const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const User = require("./user");
const Media = require("./medias");

const Application = sequelize.define(
  "Application",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // cnic: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
    userId: {
      type: DataTypes.INTEGER,

      allowNull: false,
    },

    //
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
      // validate: {
      //   isEmail: true,
      // },
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

  //
  {
    // Disable Sequelize's pluralization of model names
    // freezeTableName: true,
    //
    // Include timestamps
    defaultScope: {
      order: [["created_at", "DESC"]],
    },

    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);
// ref
Application.belongsTo(User, { foreignKey: "userId", as: "user" });
// User.hasMany(Application, { foreignKey: "userId", as: "applications" });

Media.belongsTo(Application, {
  foreignKey: "applicationId",
  as: "application",
});
Application.hasMany(Media, {
  foreignKey: "applicationId",
  as: "mediaFiles",
});
// Application.belongsTo(User, { foreignKey: "userId" });
// Application.belongsTo(User, { foreignKey: "userId" });

// Application.belongsTo(User, {
//   foreignKey: "userId",
//   as: "user",
// });

module.exports = Application;
