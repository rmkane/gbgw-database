const db = require('../models');
const Attribute = db.attribute;

exports.findAll = (req, res) => {
  Attribute.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving attributes.'
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Attribute.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: 'Error retrieving Attribute with id=' + id
      });
    });
};
