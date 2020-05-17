const { Sequelize } = require('sequelize');
const glob = require('glob');
const path = require('path');

const dbConfig = require('../config/db.config.js');

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

// Tables will be dynamically loaded from the model directory.
const db = {
  tables : {
    ai_priority: null,
    ai_range: null,
    attribute: null,
    event: null,
    ex_category: null,
    ex_skill: null,
    job_license: null,
    part: null,
    part_type: null,
    pilot: null,
    series: null,
    unit: null,
    weapon_category: null,
    weapon_type: null,
    word_tag: null
  }
};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Load all the models in this directory - https://stackoverflow.com/a/28976201/1762224
glob.sync('./app/models/*.model.js').forEach(file => {
  const filename = path.resolve(file);
  const table = path.basename(filename).replace(/\.model\.js/, '');
  db.tables[table] = require(filename)(sequelize);
});

db.tables.unit.hasMany(db.tables.part, {foreignKey: 'unitId'});
db.tables.series.hasMany(db.tables.pilot, {foreignKey: 'seriesId'});
db.tables.series.hasMany(db.tables.unit, {foreignKey: 'seriesId'});

db.tables.pilot.belongsTo(db.tables.ai_priority, { as:'aiPriority', foreignKey: 'ai_priority_id'});
db.tables.pilot.belongsTo(db.tables.ai_range, { as:'aiRange', foreignKey: 'ai_range_id'});
db.tables.part.belongsTo(db.tables.attribute);
db.tables.pilot.belongsTo(db.tables.attribute);
db.tables.unit.belongsTo(db.tables.attribute);
db.tables.unit.belongsTo(db.tables.attribute);
db.tables.ex_skill.belongsTo(db.tables.ex_category, { as:'exCategory', foreignKey: 'ex_category_id'});
db.tables.part.belongsTo(db.tables.ex_skill, { as:'exSkill', foreignKey: 'ex_skill_id'});
db.tables.pilot.belongsTo(db.tables.job_license, { as:'jobLicense', foreignKey: 'job_license_id'});
db.tables.part.belongsTo(db.tables.part_type, { as:'partType', foreignKey: 'part_type_id'});
db.tables.part.belongsTo(db.tables.part_type, { as:'partAugmentType', foreignKey: 'part_augment_type_id'});
db.tables.pilot.belongsTo(db.tables.series);
db.tables.unit.belongsTo(db.tables.series);
db.tables.part.belongsTo(db.tables.unit);
db.tables.part.belongsTo(db.tables.weapon_category, { as:'weaponCategory', foreignKey: 'weapon_category_id'});
db.tables.part.belongsTo(db.tables.weapon_type, { as:'weaponType', foreignKey: 'weapon_type_id'});
db.tables.part.belongsTo(db.tables.word_tag, { as:'wordTag1', foreignKey: 'word_tag_1_id'});
db.tables.part.belongsTo(db.tables.word_tag, { as:'wordTag2', foreignKey: 'word_tag_2_id'});
db.tables.pilot.belongsTo(db.tables.word_tag, { as:'wordTag1', foreignKey: 'word_tag_1_id'});
db.tables.pilot.belongsTo(db.tables.word_tag, { as:'wordTag2', foreignKey: 'word_tag_2_id'});

module.exports = db;
