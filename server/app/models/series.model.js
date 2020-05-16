const { DataTypes, Sequelize } = require('sequelize');
const Pilot = require('./pilot.model');
const Unit = require('./unit.model');

/**
 * @description A model of the `series` table.
 *
 * @param {Sequelize} sequelize - A sequelize connection factory
 * @returns {Model}
 */
module.exports = (sequelize) => {
  const Series = sequelize.define('series', {
    title: {type: DataTypes.STRING},
    alternate: {type: DataTypes.STRING}
  });

  //Series.hasMany(Pilot);
  //Series.hasMany(Unit);

  return Series;
};