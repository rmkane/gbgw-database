/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Series = sequelize.define('series', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    alternate: {
      type: DataTypes.STRING(64),
      allowNull: true
    }
  }, {
    tableName: 'series'
  });

  return Series;
};
