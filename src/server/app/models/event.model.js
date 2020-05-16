const { DataTypes, Sequelize } = require('sequelize');

/**
 * @description A model of the `event` table.
 *
 * @param {Sequelize} sequelize - A sequelize connection factory
 * @returns {Model}
 */
module.exports = (sequelize) => {
  const Event = sequelize.define('event', {
    name: {type: DataTypes.STRING},
    exchange: {type: DataTypes.STRING},
    blueprints: {type: DataTypes.BOOLEAN},
    startDate: {type: DataTypes.DATE}
  });

  return Event;
};