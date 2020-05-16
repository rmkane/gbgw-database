/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const AiRange = sequelize.define('ai_range', {
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
    tableName: 'ai_range'
  });

  return AiRange;
};
