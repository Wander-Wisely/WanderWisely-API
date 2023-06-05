"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class WisataAktivitas extends Model {
    static associate(models) {
      WisataAktivitas.belongsTo(models.Wisata, { foreignKey: "id_wisatas" });
      WisataAktivitas.belongsTo(models.Aktivitas, {
        foreignKey: "id_aktivitas",
      });
    }
  }

  WisataAktivitas.init(
    {
      id_wisatas: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_aktivitas: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "WisataAktivitas",
      tableName: "wisata_aktivitas",
    }
  );

  return WisataAktivitas;
};
