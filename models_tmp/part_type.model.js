/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const PartType = sequelize.define('part_type', {
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
    tableName: 'part_type'
  });

  return PartType;
};
