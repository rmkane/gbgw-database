const Sequelize = require('sequelize');

/**
 * @description A model of the `attribute` table.
 *
 * @param {Sequelize} sequelize - A sequelize connection factory
 * @returns {Model}
 */
module.exports = (sequelize) => {
  const Attribute = sequelize.define('attribute', {
    name: {type: Sequelize.STRING}
  });

  return Attribute;
};