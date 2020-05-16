/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const AiPriority = sequelize.define('ai_priority', {
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
    tableName: 'ai_priority'
  });

  return AiPriority;
};
