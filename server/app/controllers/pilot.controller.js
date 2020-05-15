const moment = require('moment');
const db = require('../models');
const Pilot = db.pilot;
const Op = db.Sequelize.Op;

// Create and Save a new Pilot
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: 'Content can not be empty!'
    });
    return;
  }

  // Create a Pilot
  const pilot = {
    name: req.body.name,
    seriesId: req.body.seriesId,
    issue: req.body.issue,
    nameJapanese: req.body.nameJapanese,
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
    trait: req.body.trait,
    jobLicenseId: req.body.jobLicenseId,
    aiType1Id: req.body.aiType1Id,
    aiType2Id: req.body.aiType2Id,
    obtainedCapsule: req.body.obtainedCapsule,
    obtainedExchange: req.body.obtainedExchange,
    releaseDate: req.body.releaseDate
  };

  // Save Pilot in the database
  Pilot.create(pilot)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Pilot.'
      });
    });
};

// Retrieve all Pilots from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Pilot.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving pilots.'
      });
    });
};

// Find a single Pilot with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  console.log('ID:', id);

  Pilot.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: 'Error retrieving Pilot with id=' + id
      });
    });
};

// Update a Pilot by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Pilot.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Pilot was updated successfully.'
        });
      } else {
        res.send({
          message: `Cannot update Pilot with id=${id}. Maybe the Pilot was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Error updating Pilot with id=' + id
      });
    });
};

// Delete a Pilot with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Pilot.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Pilot was deleted successfully!'
        });
      } else {
        res.send({
          message: `Cannot delete Pilot with id=${id}. Maybe the Pilot was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Could not delete Pilot with id=' + id
      });
    });
};

// Delete all Pilots from the database.
exports.deleteAll = (req, res) => {
  Pilot.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Pilots were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all pilots.'
      });
    });
};

// Latest Pilots within the last week.
exports.latest = (req, res) => {
  const condition = { releaseDate: { [Op.gt]: moment().subtract(7, 'days').toDate() } };

  Pilot.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
              err.message || 'Some error occurred while retrieving pilots.'
        });
      });
};
