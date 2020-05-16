const { DataTypes, Sequelize } = require('sequelize');

/**
 * @description A model of the `weapon_category` table.
 *
 * @param {Sequelize} sequelize - A sequelize connection factory
 * @returns {Model}
 */
module.exports = function(sequelize) {
  const WeaponCategory = sequelize.define('weapon_category', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(32),
      allowNull: false
    }
  }, {
    tableName: 'weapon_category'
  });

  return WeaponCategory;
};
