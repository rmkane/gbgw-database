const glob = require('glob');
const path = require('path');

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

// Load all the models in this directory - https://stackoverflow.com/a/28976201/1762224
glob.sync('./app/models/*.model.js').forEach(file => {
  const filename = path.resolve(file);
  const table = path.basename(filename).replace(/\.model\.js/, '');
  db[table] = require(filename)(sequelize);
});

module.exports = db;
