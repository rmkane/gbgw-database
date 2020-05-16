const { DataTypes, Sequelize } = require('sequelize');

/**
 * @description A model of the `word_tag` table.
 *
 * @param {Sequelize} sequelize - A sequelize connection factory
 * @returns {Model}
 */
module.exports = function(sequelize) {
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
