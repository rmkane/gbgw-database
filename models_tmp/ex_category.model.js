/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const ExCategory = sequelize.define('ex_category', {
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
    tableName: 'ex_category'
  });

  return ExCategory;
};
