const Sequelize = require('sequelize');

/**
 * @description A model of the `unit` table.
 *
 * @param {Sequelize} sequelize - A sequelize connection factory
 * @returns {Model}
 */
module.exports = (sequelize) => {
  const Event = sequelize.define('unit', {
    model: {type: Sequelize.STRING},
    name: {type: Sequelize.STRING},
    subname: {type: Sequelize.STRING},
    seriesId: {type: Sequelize.INTEGER},
    issue: {type: Sequelize.INTEGER},
    nameJapanese: {type: Sequelize.STRING},
    rarity: {type: Sequelize.INTEGER},
    attributeId: {type: Sequelize.INTEGER},
    marks: {type: Sequelize.INTEGER},
    obtainedCapsule: {type: Sequelize.STRING},
    obtainedExchange: {type: Sequelize.STRING},
    obtainedBanner: {type: Sequelize.STRING},
    obtainedSokai: {type: Sequelize.BOOLEAN},
    releaseDate: {type: Sequelize.DATE}
  });

  return Event;
};