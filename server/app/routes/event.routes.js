module.exports = app => {
  const routes = require('./abstract.routes.js');

  return routes(app, {
    controller : 'event',
    path: 'events',
    routes: [{
      method: 'get',
      path: '/latest',
      callback: 'latest'
    }]
  });
};