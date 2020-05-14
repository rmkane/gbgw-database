const Sequelize = require('sequelize');

/**
 * @description A model of the `series` table.
 *
 * @param {Sequelize} sequelize - A sequelize connection factory
 * @returns {Model}
 */
module.exports = (sequelize) => {
  const Series = sequelize.define('series', {
    title: {type: Sequelize.STRING},
    alternate: {type: Sequelize.STRING}
  });

  return Series;
};