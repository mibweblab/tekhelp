const http = require('http');
const express = require('express');
require('./models/User');
require('./services/passport');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./config/key');

// const routes = require('./routes');

mongoose
  .connect(
    keys.mongoURI,
    { useNewUrlParser: true }
  )
  .then(
    () => {
      console.log('connected to mongoDB MLAB');
    },
    err => {
      console.log("We've encountered an error connecting to your DB: ", err);
    }
  );

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

//keep cookie session for 30days
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () =>
  console.log('Express server is running on localhost: ', PORT)
);
