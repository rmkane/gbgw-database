/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const WeaponCategory = sequelize.define('weapon_category', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(32),
      allowNull: false
    }
  }, {
    tableName: 'weapon_category'
  });

  return WeaponCategory;
};
