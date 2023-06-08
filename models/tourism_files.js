"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class TourismFile extends Model {
    static associate(models) {
      TourismFile.belongsTo(models.TourismAttraction, {
        foreignKey: "tourism_attraction_id",
      });
    }
  }
  TourismFile.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      tourism_attraction_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      filename: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      path: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "TourismFile",
      tableName: "tourism_files",
    }
  );
  return TourismFile;
};
