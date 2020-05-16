const db = require('../models');
const Skill = db.ex_skill;
const Op = db.Sequelize.Op;

// Create and Save a new Skill
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: 'Content can not be empty!'
    });
    return;
  }

  // Create a Skill
  const skill = {
    name: req.body.name,
    description: req.body.description,
    exCategoryId: req.body.exCategoryId,
    pierce: req.body.pierce,
    power: req.body.power,
    duration: req.body.duration,
    magazine: req.body.magazine,
    cooldown: req.body.cooldown,
    cooldownInitial: req.body.cooldownInitial,
  };

  // Save Skill in the database
  Skill.create(skill)
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

// Retrieve all Skills from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  const condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Skill.findAll({ where: condition })
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

// Find a single Skill with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  console.log('ID:', id);

  Skill.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: 'Error retrieving Skill with id=' + id
      });
    });
};

// Update a Skill by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Skill.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num === 1) {
        res.send({
          message: 'Skill was updated successfully.'
        });
      } else {
        res.send({
          message: `Cannot update Skill with id=${id}. Maybe the Skill was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Error updating Skill with id=' + id
      });
    });
};

// Delete a Skill with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Skill.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num === 1) {
        res.send({
          message: 'Skill was deleted successfully!'
        });
      } else {
        res.send({
          message: `Cannot delete Skill with id=${id}. Maybe the Skill was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Could not delete Skill with id=' + id
      });
    });
};

// Delete all Skills from the database.
exports.deleteAll = (req, res) => {
  Skill.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Skills were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all skills.'
      });
    });
};