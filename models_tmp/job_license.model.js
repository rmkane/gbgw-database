/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
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
