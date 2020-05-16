const { DataTypes, Sequelize } = require('sequelize');

/**
 * @description A model of the `part` table.
 *
 * @param {Sequelize} sequelize - A sequelize connection factory
 * @returns {Model}
 */
module.exports = function(sequelize) {
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
    collectionId: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    unitId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'unit',
        key: 'id'
      }
    },
    partTypeId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'part_type',
        key: 'id'
      }
    },
    partAugmentTypeId: {
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
    attributeId: {
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
    exSkillId: {
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
    weaponTypeId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'weapon_type',
        key: 'id'
      }
    },
    weaponCategoryId: {
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
