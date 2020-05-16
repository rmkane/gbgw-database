/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
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
    series_id: {
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
    name_japanese: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    rarity: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    attribute_id: {
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
    obtained_capsule: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    obtained_exchange: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    obtained_banner: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    obtained_sokai: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    release_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'unit'
  });

  return Unit;
};
