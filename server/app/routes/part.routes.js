module.exports = app => {
  const routes = require('./abstract.routes.js');

  return routes(app, {
    controller : 'part',
    path: 'parts',
    routes: []
  });
};