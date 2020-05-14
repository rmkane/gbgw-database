const dbConfig = require('../config/db.config.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  },

  define: {
    /* Do not generate table names, use the existing ones. */
    freezeTableName: true,

    /* Disable the automatically-generated timestamp columns. */
    timestamps: false,

    /* Convert most columns with underscores to lower-camelcase for the models. */
    underscored: true
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.attribute = require('./attribute.model.js')(sequelize);
db.events = require('./event.model.js')(sequelize);
db.pilots = require('./pilot.model.js')(sequelize);
db.series = require('./series.model.js')(sequelize);
db.skills = require('./skill.model.js')(sequelize);

module.exports = db;
