"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TourismActivity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TourismActivity.belongsTo(models.TourismAttraction, {
        foreignKey: "tourism_attraction_id",
      });
    }
  }
  TourismActivity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tourism_attraction_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING(255),
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
      modelName: "TourismActivity",
      tableName: "tourism_activities",
    }
  );
  return TourismActivity;
};
