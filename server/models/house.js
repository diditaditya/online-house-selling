'use strict';
module.exports = function(sequelize, DataTypes) {
  var House = sequelize.define('House', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.BIGINT,
    address: DataTypes.STRING,
    contact_person: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    coordinate: DataTypes.STRING,
    imgUrl: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return House;
};
