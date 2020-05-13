module.exports = app => {
  const router = require('express').Router();
  const pilots = require('../controllers/pilot.controller.js');

  app.use('/api/pilots', router);

  // Create a new Pilot
  router.post('/', pilots.create);

  // Retrieve all Pilots
  router.get('/', pilots.findAll);

  // Retrieve a single Pilot with id
  router.get('/:id', pilots.findOne);

  // Update a Pilot with id
  router.put('/:id', pilots.update);

  // Delete a Pilot with id
  router.delete('/:id', pilots.delete);

  // Delete all Pilot
  router.delete('/', pilots.deleteAll);
};
