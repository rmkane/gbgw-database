/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Event = sequelize.define('event', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    exchange: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    blueprints: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'event'
  });

  return Event;
};
