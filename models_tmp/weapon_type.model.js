/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const WeaponType = sequelize.define('weapon_type', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(11),
      allowNull: false
    }
  }, {
    tableName: 'weapon_type'
  });

  return WeaponType;
};
