const db = require('../models');
const Part = db.tables.part;
const Op = db.Sequelize.Op;

// Create and Save a new Part
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: 'Content can not be empty!'
    });
    return;
  }

  // Create a Part
  const part = {
    name: req.body.name,
    collectionId: req.body.collectionId,
    unitId: req.body.unitId,
    partTypeId: req.body.partTypeId,
    partAugmentTypeId: req.body.partAugmentTypeId,
    rarity: req.body.rarity,
    attributeId: req.body.attributeId,
    wordTag1Id: req.body.wordTag1Id,
    wordTag2Id: req.body.wordTag2Id,
    armor: req.body.armor,
    meleeAttack: req.body.meleeAttack,
    shotAttack: req.body.shotAttack,
    meleeDefense: req.body.meleeDefense,
    shotDefense: req.body.shotDefense,
    beamResistance: req.body.beamResistance,
    physicalResistance: req.body.physicalResistance,
    exSkillId: req.body.exSkillId,
    trait: req.body.trait,
    weaponTypeId: req.body.weaponTypeId,
    weaponCategoryId: req.body.weaponCategoryId,
    notes: req.body.notes,
  };

  // Save Part in the database
  Part.create(part)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Part.'
      });
    });
};

// Retrieve all Parts from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Part.findAll({
    where: condition,
    include: [{
      model: db.tables.attribute
    }, {
      model: db.tables.ex_skill,
      as: 'exSkill'
    }, {
      model: db.tables.part_type,
      as: 'partType'
    }, {
      model: db.tables.part_type,
      as: 'partAugmentType'
    }, {
      model: db.tables.weapon_type,
      as: 'weaponType'
    }, {
      model: db.tables.weapon_category,
      as: 'weaponCategory'
    }, {
      model: db.tables.word_tag,
      as: 'wordTag1'
    }, {
      model: db.tables.word_tag,
      as: 'wordTag2'
    }]
  })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
              err.message || 'Some error occurred while retrieving parts.'
        });
      });
};

// Find a single Part with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  console.log('ID:', id);

  Part.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: 'Error retrieving Part with id=' + id
      });
    });
};

// Update a Part by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Part.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num === 1) {
        res.send({
          message: 'Part was updated successfully.'
        });
      } else {
        res.send({
          message: `Cannot update Part with id=${id}. Maybe the Part was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Error updating Part with id=' + id
      });
    });
};

// Delete a Part with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Part.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num === 1) {
        res.send({
          message: 'Part was deleted successfully!'
        });
      } else {
        res.send({
          message: `Cannot delete Part with id=${id}. Maybe the Part was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Could not delete Part with id=' + id
      });
    });
};

// Delete all Parts from the database.
exports.deleteAll = (req, res) => {
  Part.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Parts were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all parts.'
      });
    });
};