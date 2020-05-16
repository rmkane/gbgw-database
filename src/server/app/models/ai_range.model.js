const { DataTypes, Sequelize } = require('sequelize');

/**
 * @description A model of the `ai_range` table.
 *
 * @param {Sequelize} sequelize - A sequelize connection factory
 * @returns {Model}
 */
module.exports = function(sequelize) {
  const AiRange = sequelize.define('ai_range', {
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
    tableName: 'ai_range'
  });

  return AiRange;
};
