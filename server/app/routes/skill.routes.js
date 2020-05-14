module.exports = app => {
  const routes = require('./abstract.routes.js');

  return routes(app, {
    controller : 'skill',
    path: 'skills',
    routes: []
  });
};