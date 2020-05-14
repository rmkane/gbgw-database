const Sequelize = require('sequelize');

/**
 * @description A model of the part: {type: Sequelize.STRING},
 *
 * @param {Sequelize} sequelize - A sequelize connection factory
 * @returns {Model}
 */
module.exports = (sequelize) => {
  const Part = sequelize.define('part', {
    name: {type: Sequelize.STRING},
    collectionId: {type: Sequelize.STRING},
    unitId: {type: Sequelize.INTEGER},
    partTypeId: {type: Sequelize.INTEGER},
    partAugmentTypeId: {type: Sequelize.INTEGER},
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
    exSkillId: {type: Sequelize.INTEGER},
    trait: {type: Sequelize.STRING},
    weaponTypeId: {type: Sequelize.INTEGER},
    weaponCategoryId: {type: Sequelize.INTEGER},
    notes: {type: Sequelize.STRING}
  });

  return Part;
};