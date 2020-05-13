module.exports = (sequelize, Sequelize) => {
  const Series = sequelize.define('series', {
    title: {type: Sequelize.STRING},
    alternate: {type: Sequelize.STRING}
  });

  return Series;
};