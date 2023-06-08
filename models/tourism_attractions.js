"use strict";
const { Model } = require("sequelize");
// import tourism = require("../models/")
module.exports = (sequelize, DataTypes) => {
  class TourismAttraction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Wisata.belongsToMany(models.Fasilitas, {
      //   through: models.WisataFasilitas,
      //   foreignKey: "id_wisatas",
      //   otherKey: "id_fasilitas",
      // });
      // Wisata.belongsToMany(models.Aktivitas, {
      //   through: models.WisataAktivitas,
      //   foreignKey: "id_wisatas",
      //   otherKey: "id_aktivitas",
      // });
      TourismAttraction.hasMany(models.TourismActivity, {
        foreignKey: "tourism_attraction_id",
      });
      TourismAttraction.hasMany(models.TourismFacility, {
        foreignKey: "tourism_attraction_id",
      });
      TourismAttraction.hasMany(models.TourismFile, {
        foreignKey: "tourism_attraction_id",
      });

      TourismAttraction.belongsTo(models.TourismType, {
        foreignKey: "tourism_type_id",
        // as: "tourismType",
      });

      // TourismAttraction.hasMany(models.TourismType, {
      //   foreignKey: "tourism_type_id",
      // });
      // TourismAttraction.belongsTo(models.TourismType, {
      //   foreignKey: "tourism_type_id",
      // });
    }
  }
  TourismAttraction.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      city: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      province: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      latitude: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      longitude: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      cost_from: {
        type: DataTypes.DOUBLE(15, 2),
        allowNull: true,
      },
      cost_to: {
        type: DataTypes.DOUBLE(15, 2),
        allowNull: true,
      },
      tourism_type_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      rating: {
        type: DataTypes.DECIMAL(10, 1),
        allowNull: true,
      },
      descriptions: {
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
      modelName: "TourismAttraction",
      tableName: "tourism_attractions",
    }
  );
  return TourismAttraction;
};
