const { DataTypes, Sequelize } = require('sequelize');

/**
 * @description A model of the `attribute` table.
 *
 * @param {Sequelize} sequelize - A sequelize connection factory
 * @returns {Model}
 */
module.exports = function(sequelize) {
  const Attribute = sequelize.define('attribute', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(16),
      allowNull: false
    }
  }, {
    tableName: 'attribute'
  });

  return Attribute;
};