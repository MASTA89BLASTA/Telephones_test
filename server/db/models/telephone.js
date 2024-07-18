"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Telephone extends Model {}
  Telephone.init(
    {
      code: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      number: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      countryName: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      flag: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      
    },
    {
      sequelize,
      modelName: "Telephone",
    }
  );
  return Telephone;
};
