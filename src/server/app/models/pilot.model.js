const { DataTypes, Sequelize } = require('sequelize');

/**
 * @description A model of the `pilot` table.
 *
 * @param {Sequelize} sequelize - A sequelize connection factory
 * @returns {Model}
 */
module.exports = function(sequelize) {
  const Pilot = sequelize.define('pilot', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: false
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
      allowNull: false
    },
    nameJapanese: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    rarity: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    attribute_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'attribute',
        key: 'id'
      }
    },
    wordTag1Id: {
      type: DataTypes.INTEGER(11),
      field : 'word_tag_1_id',
      allowNull: false,
      references: {
        model: 'word_tag',
        key: 'id'
      }
    },
    wordTag2Id: {
      type: DataTypes.INTEGER(11),
      field : 'word_tag_2_id',
      allowNull: false,
      references: {
        model: 'word_tag',
        key: 'id'
      }
    },
    armor: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    meleeAttack: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    shotAttack: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    meleeDefense: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    shotDefense: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    beamResistance: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    physicalResistance: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    trait: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    jobLicenseId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'job_license',
        key: 'id'
      }
    },
    aiRangeId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'ai_range',
        key: 'id'
      }
    },
    aiPriorityId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'ai_priority',
        key: 'id'
      }
    },
    obtainedCapsule: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    obtainedExchange: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    releaseDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    tableName: 'pilot'
  });

  return Pilot;
};
