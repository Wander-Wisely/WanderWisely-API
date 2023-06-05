"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Wisata extends Model {
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
      Wisata.hasMany(models.Aktivitas, {
        foreignKey: "id_tempat",
      });
      Wisata.hasMany(models.Fasilitas, {
        foreignKey: "id_tempat",
      });
      Wisata.hasMany(models.Media, {
        foreignKey: "id_tempat",
      });
    }
  }
  Wisata.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nama_tempat: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      kota: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      provinsi: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      latitude: {
        type: DataTypes.DECIMAL(10, 6),
        allowNull: false,
      },
      longitude: {
        type: DataTypes.DECIMAL(10, 6),
        allowNull: false,
      },
      dari_biaya: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      sampai_biaya: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      jenis_wisata: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      rating: {
        type: DataTypes.STRING(3),
        allowNull: true,
      },
      deskripsi: {
        type: DataTypes.TEXT,
        allowNull: false,
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
      modelName: "Wisata",
      tableName: "wisatas",
    }
  );
  return Wisata;
};
