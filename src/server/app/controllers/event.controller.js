const moment = require('moment');
const db = require('../models');
const Event = db.tables.event;
const Op = db.Sequelize.Op;

// Create and Save a new Event
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: 'Content can not be empty!'
    });
    return;
  }

  // Create a Event
  const event = {
    name: req.body.name,
    exchange: req.body.exchange,
    blueprints: req.body.blueprints,
    startDate: req.body.startDate
  };

  // Save Event in the database
  Event.create(event)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
              err.message || 'Some error occurred while creating the Skill.'
        });
      });
};

exports.findAll = (req, res) => {
  Event.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving events.'
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Event.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: 'Error retrieving Event with id=' + id
      });
    });
};

// Latest Skills within the last week.
exports.latest = (req, res) => {
  const condition = { startDate: { [Op.gt]: moment().subtract(7, 'days').toDate() } };

  Event.findAll({ where: condition })
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