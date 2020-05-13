module.exports = app => {
  const router = require('express').Router();
  const series = require('../controllers/series.controller.js');

  app.use('/api/series', router);

  // Create a new Pilot
  router.post('/', series.create);

  // Retrieve all Pilots
  router.get('/', series.findAll);

  // Retrieve a single Pilot with id
  router.get('/:id', series.findOne);

  // Update a Pilot with id
  router.put('/:id', series.update);

  // Delete a Pilot with id
  router.delete('/:id', series.delete);

  // Delete all Pilot
  router.delete('/', series.deleteAll);
};
