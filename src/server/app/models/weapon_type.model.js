const { DataTypes, Sequelize } = require('sequelize');

/**
 * @description A model of the `weapon_type` table.
 *
 * @param {Sequelize} sequelize - A sequelize connection factory
 * @returns {Model}
 */
module.exports = function(sequelize) {
  const WeaponType = sequelize.define('weapon_type', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(11),
      allowNull: false
    }
  }, {
    tableName: 'weapon_type'
  });

  return WeaponType;
};
