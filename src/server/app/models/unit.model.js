const { DataTypes, Sequelize } = require('sequelize');

/**
 * @description A model of the `unit` table.
 *
 * @param {Sequelize} sequelize - A sequelize connection factory
 * @returns {Model}
 */
module.exports = function(sequelize) {
  const Unit = sequelize.define('unit', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    model: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    subname: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    seriesId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'series',
        key: 'id'
      }
    },
    issue: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    nameJapanese: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    rarity: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    attributeId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'attribute',
        key: 'id'
      }
    },
    marks: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    obtainedCapsule: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    obtainedExchange: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    obtainedBanner: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    obtainedSokai: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    releaseDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'unit'
  });

  return Unit;
};
