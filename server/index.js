/* IMPORTS */
require('dotenv').config();

const express = require('express');
// For parsing the body of the request
const bodyParser = require('body-parser');
// For interacting with the mongoDb
const mongoose = require('mongoose');
// For allowing cross origin requests
const cors = require('cors');
// For securing the app by setting up various headers
const helmet = require('helmet');
// For logging the requests
const morgan = require('morgan');

const clientRoutes = require('./routes/client.route.js');
const generalRoutes = require('./routes/general.route.js');
const managementRoutes = require('./routes/management.route.js');
const salesRoutes = require('./routes/sales.route.js');

/* CONFIGURATION */
const app = express();
// Parses incoming requests with JSON payloads
app.use(express.json());
app.use(helmet());
// Allows us to make the cross origin sharing requests
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
// Logs the requests
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use('/client', clientRoutes);
app.use('/general', generalRoutes);
app.use('/management', managementRoutes);
app.use('/sales', salesRoutes);

app.get('/', async (req, res, next) => {
  try {
    res.status(200).json({
      message: 'Welcome to the MOCK DATA API for the ADMIN DASHBOARD',
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

/* ENVIRONMENT VARIABLES */
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5000;

/* MONGODB SETUP */
mongoose.set('strictQuery', true);
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Successfully connected to the database');
  })
  .catch((err) => {
    console.log(err);
  });

/* SERVER SETUP */
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
