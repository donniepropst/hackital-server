'use strict';
module.exports = function(sequelize, DataTypes) {
  var Street = sequelize.define('Street', {
    name: DataTypes.STRING,
    area: DataTypes.STRING,
    block: DataTypes.STRING,
    direction: DataTypes.STRING,
    streetName: DataTypes.STRING,
    side: DataTypes.STRING,
    restrictions: DataTypes.TEXT,
    exclusions: DataTypes.TEXT

  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Street;
};
