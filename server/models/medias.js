// MediaModel.js

const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const Application = require("./applications");

const Media = sequelize.define(
  "Media",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    applicationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING, // Assuming the URL field will store the path or link to the media file
      allowNull: false,
    },
    // Add more fields as needed for storing media data
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

// Media.belongsTo(Application, {
//   foreignKey: "applicationId",
//   as: "application",
// });
// Application.hasMany(Media, { foreignKey: "applicationId", as: "medias" });
// Application.belongsTo(Media, { foreignKey: "applicationId", as: "application" });

module.exports = Media;
