/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
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
      allowNull: false
    },
    name_japanese: {
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
    word_tag_1_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'word_tag',
        key: 'id'
      }
    },
    word_tag_2_id: {
      type: DataTypes.INTEGER(11),
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
    melee_attack: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    shot_attack: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    melee_defense: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    shot_defense: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    beam_resistance: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    physical_resistance: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    trait: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    job_license_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'job_license',
        key: 'id'
      }
    },
    ai_range_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'ai_range',
        key: 'id'
      }
    },
    ai_priority_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'ai_priority',
        key: 'id'
      }
    },
    obtained_capsule: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    obtained_exchange: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    release_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    tableName: 'pilot'
  });

  return Pilot;
};
