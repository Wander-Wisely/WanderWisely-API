"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TourismFacility extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TourismFacility.belongsTo(models.TourismAttraction, {
        foreignKey: "tourism_attraction_id",
      });
    }
  }
  TourismFacility.init(
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
        type: DataTypes.STRING(100),
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
      modelName: "TourismFacility",
      tableName: "tourism_facilities",
    }
  );
  return TourismFacility;
};
