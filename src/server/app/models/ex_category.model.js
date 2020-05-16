const { DataTypes, Sequelize } = require('sequelize');

/**
 * @description A model of the `ex_category` table.
 *
 * @param {Sequelize} sequelize - A sequelize connection factory
 * @returns {Model}
 */
module.exports = function(sequelize) {
  const ExCategory = sequelize.define('ex_category', {
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
    tableName: 'ex_category'
  });

  return ExCategory;
};
