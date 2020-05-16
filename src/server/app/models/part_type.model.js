const { DataTypes, Sequelize } = require('sequelize');

/**
 * @description A model of the `part_type` table.
 *
 * @param {Sequelize} sequelize - A sequelize connection factory
 * @returns {Model}
 */
module.exports = function(sequelize) {
  const PartType = sequelize.define('part_type', {
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
    tableName: 'part_type'
  });

  return PartType;
};
