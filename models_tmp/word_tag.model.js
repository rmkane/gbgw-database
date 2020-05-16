/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const WordTag = sequelize.define('word_tag', {
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
    tableName: 'word_tag'
  });

  return WordTag;
};
