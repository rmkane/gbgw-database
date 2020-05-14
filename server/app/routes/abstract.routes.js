/**
 * @description An abstract express router that provides basic CRUD routes.
 *
 * @param {express} app
 * @param {Object} options - Specifies the properties of the router implementation
 * @param {string} options.controller - The controller name for the route
 * @param {string} options.path - The base path for the route
 * @param {Object[]} options.routes - Additional routes for specialized controller methods
 */
module.exports = (app, options={}) => {
  const router = require('express').Router();
  const controller = require(`../controllers/${options.controller}.controller.js`);

  app.use(`/api/${options.path}`, router);

  // Additional controller-specific routes; need to be specified before the `:id` routes.
  if (options.routes && options.routes.length) {
    options.routes.forEach(route => {
      let method = (route.method || 'get').toLowerCase();
      router[method](route.path, controller[route.callback]);
    });
  }

  /**
   * The following routes should be defined in every controller.
   */

  // Retrieve all table entries
  router.get('/', controller.findAll);

  // Retrieve a single entry with id
  router.get('/:id', controller.findOne);

  /**
   * The following routes are only used for tables that are constantly updated.
   */

  // Create a new table entry
  if (controller.create) router.post('/', controller.create);

  // Update an entry with id
  if (controller.update) router.put('/:id', controller.update);

  // Delete an entry with id
  if (controller.delete) router.delete('/:id', controller.delete);

  // Delete all entries
  if (controller.deleteAll) router.delete('/', controller.deleteAll);
};
