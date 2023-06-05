"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class WisataFasilitas extends Model {
    static associate(models) {
      // Define associations here
      // models.Wisata.belongsToMany(models.Fasilitas, {
      //   through: "WisataFasilitas",
      //   foreignKey: "id_wisatas",
      // });
      // models.Fasilitas.belongsToMany(models.Wisata, {
      //   through: "WisataFasilitas",
      //   foreignKey: "id_fasilitas",
      // });
    }
  }

  WisataFasilitas.init(
    {
      id_wisatas: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_fasilitas: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "WisataFasilitas",
      tableName: "wisata_fasilitas",
    }
  );

  return WisataFasilitas;
};
