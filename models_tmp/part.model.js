/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Part = sequelize.define('part', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    collection_id: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    unit_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'unit',
        key: 'id'
      }
    },
    part_type_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'part_type',
        key: 'id'
      }
    },
    part_augment_type_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'part_type',
        key: 'id'
      }
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
    ex_skill_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'ex_skill',
        key: 'id'
      }
    },
    trait: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    weapon_type_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'weapon_type',
        key: 'id'
      }
    },
    weapon_category_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'weapon_category',
        key: 'id'
      }
    },
    notes: {
      type: DataTypes.STRING(512),
      allowNull: true
    }
  }, {
    tableName: 'part'
  });

  return Part;
};
