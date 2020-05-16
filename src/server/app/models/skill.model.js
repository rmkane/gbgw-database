const { DataTypes, Sequelize } = require('sequelize');
const Part = require('./part.model');

/**
 * @description A model of the `ex_skill` table.
 *
 * @param {Sequelize} sequelize - A sequelize connection factory
 * @returns {Model}
 */
module.exports = (sequelize) => {
  const Skill = sequelize.define('ex_skill', {
    name: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    exCategoryId: {type: DataTypes.INTEGER},
    pierce: {type: DataTypes.STRING},
    power: {type: DataTypes.STRING},
    duration: {type: DataTypes.INTEGER},
    magazine: {type: DataTypes.INTEGER},
    cooldown: {type: DataTypes.INTEGER},
    cooldownInitial: {type: DataTypes.INTEGER}
  });

  return Skill;
};