// requirements
const express = require('express');
const path = require('path');

// route files
const api = require('./routes/index');

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
// app.use('/', html);

// get route notes page
app.get('/notes', (req, res) => {
      res.sendFile(path.join(__dirname, '/public/notes.html'));
  });
  
// get route default homepage
app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '/public/index.html'));
  });


// local host listener
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);