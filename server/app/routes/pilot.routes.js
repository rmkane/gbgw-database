module.exports = app => {
  const pilots = require('../controllers/pilot.controller.js');
  const router = require('express').Router();

  // Create a new Pilot
  router.post('/', pilots.create);

  // Retrieve all Pilots
  router.get('/', pilots.findAll);

  // Retrieve all published Pilots
  router.get('/published', pilots.findAllPublished);

  // Retrieve a single Pilot with id
  router.get('/:id', pilots.findOne);

  // Update a Pilot with id
  router.put('/:id', pilots.update);

  // Delete a Pilot with id
  router.delete('/:id', pilots.delete);

  // Create a new Pilot
  router.delete('/', pilots.deleteAll);

  app.use('/api/pilots', router);
};
