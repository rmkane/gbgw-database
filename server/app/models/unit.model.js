const { DataTypes, Sequelize } = require('sequelize');

/**
 * @description A model of the `unit` table.
 *
 * @param {Sequelize} sequelize - A sequelize connection factory
 * @returns {Model}
 */
module.exports = (sequelize) => {
  const Event = sequelize.define('unit', {
    model: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    subname: {type: DataTypes.STRING},
    seriesId: {type: DataTypes.INTEGER},
    issue: {type: DataTypes.INTEGER},
    nameJapanese: {type: DataTypes.STRING},
    rarity: {type: DataTypes.INTEGER},
    attributeId: {type: DataTypes.INTEGER},
    marks: {type: DataTypes.INTEGER},
    obtainedCapsule: {type: DataTypes.STRING},
    obtainedExchange: {type: DataTypes.STRING},
    obtainedBanner: {type: DataTypes.STRING},
    obtainedSokai: {type: DataTypes.BOOLEAN},
    releaseDate: {type: DataTypes.DATE}
  });

  return Event;
};