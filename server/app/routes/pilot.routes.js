module.exports = app => {
  const routes = require('./abstract.routes.js');

  return routes(app, {
    controller : 'pilot',
    path: 'pilots',
    routes: [{
      method: 'get',
      path: '/latest',
      callback: 'latest'
    }]
  });
};
