const { DataTypes, Sequelize } = require('sequelize');

/**
 * @description A model of the `event` table.
 *
 * @param {Sequelize} sequelize - A sequelize connection factory
 * @returns {Model}
 */
module.exports = function(sequelize) {
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
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'event'
  });

  return Event;
};
