const moment = require('moment');
const db = require('../models');
const Unit = db.unit;
const Op = db.Sequelize.Op;

// Create and Save a new Unit
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: 'Content can not be empty!'
    });
    return;
  }

  // Create a Unit
  const unit = {
    name: req.body.name,
    exchange: req.body.exchange,
    blueprints: req.body.blueprints,
    startDate: req.body.startDate
  };

  // Save Unit in the database
  Unit.create(unit)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
              err.message || 'Some error occurred while creating the Unit.'
        });
      });
};

exports.findAll = (req, res) => {
  Unit.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving units.'
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Unit.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: 'Error retrieving Unit with id=' + id
      });
    });
};

// Latest Skills within the last week.
exports.latest = (req, res) => {
  const condition = { releaseDate: { [Op.gt]: moment().subtract(7, 'days').toDate() } };

  Unit.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
              err.message || 'Some error occurred while retrieving skills.'
        });
      });
};