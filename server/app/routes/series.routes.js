module.exports = app => {
  const routes = require('./abstract.routes.js');

  return routes(app, {
    controller : 'series',
    path: 'series',
    routes: []
  });
};