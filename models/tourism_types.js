const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class TourismType extends Model {
    static associate(models) {
      TourismType.hasMany(models.TourismAttraction, {
        foreignKey: "tourism_type_id",
        // as: "tourismAttractions",
      });
    }
  }

  TourismType.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(30),
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
      modelName: "TourismType",
      tableName: "tourism_types",
    }
  );

  return TourismType;
};
