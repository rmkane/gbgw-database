const { DataTypes, Sequelize } = require('sequelize');
const Series = require('./series.model');

/**
 * @description A model of the `pilot` table.
 *
 * @param {Sequelize} sequelize - A sequelize connection factory
 * @returns {Model}
 */
module.exports = (sequelize) => {
  const Pilot = sequelize.define('pilot', {
    name: {type: DataTypes.STRING},
    seriesId: {type: DataTypes.INTEGER},
    issue: {type: DataTypes.INTEGER},
    nameJapanese: {type: DataTypes.STRING},
    rarity: {type: DataTypes.INTEGER},
    attributeId: {type: DataTypes.INTEGER},
    wordTag1Id: {type: DataTypes.INTEGER, field : 'word_tag_1_id'},
    wordTag2Id: {type: DataTypes.INTEGER, field : 'word_tag_2_id'},
    armor: {type: DataTypes.INTEGER},
    meleeAttack: {type: DataTypes.INTEGER},
    shotAttack: {type: DataTypes.INTEGER},
    meleeDefense: {type: DataTypes.INTEGER},
    shotDefense: {type: DataTypes.INTEGER},
    beamResistance: {type: DataTypes.INTEGER},
    physicalResistance: {type: DataTypes.INTEGER},
    trait: {type: DataTypes.STRING},
    jobLicenseId: {type: DataTypes.INTEGER},
    aiRangeId: {type: DataTypes.INTEGER},
    aiPriorityId: {type: DataTypes.INTEGER},
    obtainedCapsule: {type: DataTypes.STRING},
    obtainedExchange: {type: DataTypes.STRING},
    releaseDate: {type: DataTypes.DATE}
  });

  //Pilot.belongsTo(Series);

  return Pilot;
};