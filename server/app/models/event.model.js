const Sequelize = require('sequelize');

/**
 * @description A model of the `attribute` table.
 *
 * @param {Sequelize} sequelize - A sequelize connection factory
 * @returns {Model}
 */
module.exports = (sequelize) => {
  const Event = sequelize.define('event', {
    name: {type: Sequelize.STRING},
    exchange: {type: Sequelize.STRING},
    blueprints: {type: Sequelize.BOOLEAN},
    start_date: {type: Sequelize.DATE}
  });

  return Event;
};