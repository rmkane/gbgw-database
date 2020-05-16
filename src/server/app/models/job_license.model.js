const { DataTypes, Sequelize } = require('sequelize');

/**
 * @description A model of the `job_license` table.
 *
 * @param {Sequelize} sequelize - A sequelize connection factory
 * @returns {Model}
 */
module.exports = function(sequelize) {
  const JobLicense = sequelize.define('job_license', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(16),
      allowNull: false
    }
  }, {
    tableName: 'job_license'
  });

  return JobLicense;
};
