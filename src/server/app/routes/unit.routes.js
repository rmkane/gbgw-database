module.exports = app => {
  const routes = require('./abstract.routes.js');

  return routes(app, {
    controller : 'unit',
    path: 'units',
    routes: [{
      method: 'get',
      path: '/latest',
      callback: 'latest'
    }]
  });
};