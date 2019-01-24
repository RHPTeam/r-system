const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const config = require('./src/configs/config');
//get all api 
const api = require('./src/routes/index');

//set up the express app 
const app = express();

// Passport Config
require('./src/services/passport-local')(passport);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//connect db cloud.mongodb.com
mongoose.connect(
  `mongodb+srv://admin:${config.MONGODB_ATLAS_PW}@cluster0-yz6nl.mongodb.net/test?retryWrites=true`,
  {
    useNewUrlParser: true,
  }
);
mongoose.set('useFindAndModify', false);

// log requests to the console
app.use(logger('dev'));

// Enable CORS
app.use(cors());

// //setup body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
  
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', api);

app.get('/', (req, res) => res.send(req.ip));

app.use(function (err, req, res, next) {
  console.log(err.message);
  /* We log the error internaly */

  /*
    * Remove Error's `stack` property. We don't want
    * users to see this at the production env
    */
  if (req.app.get('env') !== 'development') {
      delete err.stack;
  }

  /* Finaly respond to the request */
  res.status(err.statusCode || 500).json(err);
});

module.exports = app;
