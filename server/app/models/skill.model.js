const Sequelize = require('sequelize');

/**
 * @description A model of the `pilot` table.
 *
 * @param {Sequelize} sequelize - A sequelize connection factory
 * @returns {Model}
 */
module.exports = (sequelize) => {
  const Skill = sequelize.define('ex_skill', {
    name: {type: Sequelize.STRING},
    description: {type: Sequelize.STRING},
    exCategoryId: {type: Sequelize.INTEGER},
    pierce: {type: Sequelize.STRING},
    power: {type: Sequelize.STRING},
    duration: {type: Sequelize.INTEGER},
    magazine: {type: Sequelize.INTEGER},
    cooldown: {type: Sequelize.INTEGER},
    cooldownInitial: {type: Sequelize.INTEGER}
  });

  return Skill;
};