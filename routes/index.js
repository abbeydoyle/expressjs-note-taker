// requirements
// express
const express = require('express');
// load express.js
const app = express();
// notes modular router
const notesRouter = require("./notes");

// use notes router
app.use("/notes", notesRouter);


// modular export 
module.exports = app;