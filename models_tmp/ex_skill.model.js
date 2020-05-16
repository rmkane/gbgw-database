/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const ExSkill = sequelize.define('ex_skill', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    ex_category_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'ex_category',
        key: 'id'
      }
    },
    pierce: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    power: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    duration: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    magazine: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    cooldown: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    cooldown_initial: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'ex_skill'
  });

  return ExSkill;
};
