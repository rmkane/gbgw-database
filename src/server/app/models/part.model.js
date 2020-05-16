const { DataTypes, Sequelize } = require('sequelize');
const Skill = require('./skill.model');
const Unit = require('./unit.model');

/**
 * @description A model of the part: {type: DataTypes.STRING},
 *
 * @param {Sequelize} sequelize - A sequelize connection factory
 * @returns {Model}
 */
module.exports = (sequelize) => {
  const Part = sequelize.define('part', {
    name: {type: DataTypes.STRING},
    collectionId: {type: DataTypes.STRING},
    unitId: {type: DataTypes.INTEGER},
    partTypeId: {type: DataTypes.INTEGER},
    partAugmentTypeId: {type: DataTypes.INTEGER},
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
    exSkillId: {type: DataTypes.INTEGER},
    trait: {type: DataTypes.STRING},
    weaponTypeId: {type: DataTypes.INTEGER},
    weaponCategoryId: {type: DataTypes.INTEGER},
    notes: {type: DataTypes.STRING}
  });

  //Part.belongsTo(Unit);
  //Part.hasOne(Skill);

  return Part;
};