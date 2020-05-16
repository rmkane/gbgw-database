const { DataTypes, Sequelize } = require('sequelize');

/**
 * @description A model of the `series` table.
 *
 * @param {Sequelize} sequelize - A sequelize connection factory
 * @returns {Model}
 */
module.exports = function(sequelize) {
  const Series = sequelize.define('series', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    alternate: {
      type: DataTypes.STRING(64),
      allowNull: true
    }
  }, {
    tableName: 'series'
  });

  return Series;
};
