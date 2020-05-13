const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: 'http://localhost:8081'
};

app.use(cors(corsOptions));

// Parse requests of content-type - application/json
app.use(bodyParser.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./app/models');

db.sequelize.sync();

/* Drop the table if it already exists */
//db.sequelize.sync({ force: true }).then(() => {
//  console.log('Drop and re-sync db.');
//});

// Simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API for GBGW.' });
});

// Data routes
require('./app/routes/series.routes')(app);
require('./app/routes/pilot.routes')(app);

// Set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
