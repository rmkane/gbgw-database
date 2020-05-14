const Sequelize = require('sequelize');

/**
 * @description A model of the `pilot` table.
 *
 * @param {Sequelize} sequelize - A sequelize connection factory
 * @returns {Model}
 */
module.exports = (sequelize) => {
  const Pilot = sequelize.define('pilot', {
    name: {type: Sequelize.STRING},
    seriesId: {type: Sequelize.INTEGER},
    issue: {type: Sequelize.INTEGER},
    nameJapanese: {type: Sequelize.STRING},
    rarity: {type: Sequelize.INTEGER},
    attributeId: {type: Sequelize.INTEGER},
    wordTag1Id: {type: Sequelize.INTEGER, field : 'word_tag_1_id'},
    wordTag2Id: {type: Sequelize.INTEGER, field : 'word_tag_2_id'},
    armor: {type: Sequelize.INTEGER},
    meleeAttack: {type: Sequelize.INTEGER},
    shotAttack: {type: Sequelize.INTEGER},
    meleeDefense: {type: Sequelize.INTEGER},
    shotDefense: {type: Sequelize.INTEGER},
    beamResistance: {type: Sequelize.INTEGER},
    physicalResistance: {type: Sequelize.INTEGER},
    trait: {type: Sequelize.STRING},
    jobLicenseId: {type: Sequelize.INTEGER},
    aiRangeId: {type: Sequelize.INTEGER},
    aiPriorityId: {type: Sequelize.INTEGER},
    obtainedCapsule: {type: Sequelize.STRING},
    obtainedExchange: {type: Sequelize.STRING},
    releaseDate: {type: Sequelize.DATE}
  });

  return Pilot;
};