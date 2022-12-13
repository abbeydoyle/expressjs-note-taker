// requirements
const express = require('express');
const path = require('path');

// route files
const api = require('./routes/api');
const html = require('./routes/html');

// load express.js
const app = express();

// local host
const PORT = process.env.PORT || 3001;

// parsing json
app.use(express.json());

// parsing array
app.use(express.urlencoded({ extended: true }));

// static files
app.use(express.static('public'));

// middleware
app.use('/api', api);
app.use('/', html);

// local host listener
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);