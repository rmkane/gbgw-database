/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Attribute = sequelize.define('attribute', {
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
    tableName: 'attribute'
  });

  return Attribute;
};
