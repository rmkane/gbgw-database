module.exports = (app, config={}) => {
  const router = require('express').Router();
  const controller = require(`../controllers/${config.controller}.controller.js`);

  app.use(`/api/${config.path}`, router);

  // Additional controller-specific routes; need to be specified before the `:id` routes.
  if (config.routes && config.routes.length) {
    config.routes.forEach(route => {
      let method = (route.method || 'get').toLowerCase();
      router[method](route.path, controller[route.callback]);
    });
  }

  // Create a new table entry
  router.post('/', controller.create);

  // Retrieve all table entries
  router.get('/', controller.findAll);

  // Retrieve a single entry with id
  router.get('/:id', controller.findOne);

  // Update an entry with id
  router.put('/:id', controller.update);

  // Delete an entry with id
  router.delete('/:id', controller.delete);

  // Delete all entries
  router.delete('/', controller.deleteAll);
};
