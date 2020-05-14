module.exports = app => {
  const routes = require('./abstract.routes.js');

  return routes(app, {
    controller : 'attribute',
    path: 'attributes',
    routes: []
  });
};