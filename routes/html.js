// requirements
// new route function
const router = require('express').Router();
// file path
const path = require('path');
// file write
const fs = require('fs');

// get route notes page
router.get('/notes', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/notes.html'));
  });
  
// get route homepage
router.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/index.html'));
  });

// get route default homepage
router.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/index.html'));
  });

// export
module.exports = router