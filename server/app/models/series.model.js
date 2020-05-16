const { DataTypes, Sequelize } = require('sequelize');

/**
 * @description A model of the `series` table.
 *
 * @param {Sequelize} sequelize - A sequelize connection factory
 * @returns {Model}
 */
module.exports = (sequelize) => {
  const Series = sequelize.define('series', {
    title: {type: DataTypes.STRING},
    alternate: {type: DataTypes.STRING}
  });

  return Series;
};