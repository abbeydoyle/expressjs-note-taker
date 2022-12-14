// requirements
// new route function
const notes = require('express').Router();
// file path
const path = require('path');
// file write
const fs = require('fs');
// express
const express = require('express');
// unique save id
const { v4: uuidv4 } = require('uuid')
// helper file
const { readFromFile, readAndAppend, writeToFile } = require("../helpers/fsUtils");
// database filepath
const db = "./db/db.json"

// get notes from db and parse
notes.get("/", (req, res) => {
      readFromFile(`${db}`).then((data) => res.json(JSON.parse(data)));
});

// post new notes to db
notes.post("/", (req, res) => {
      const { title, text } = req.body;
      // error for no input
      if (!title || !text) {
            res.status(400).json({msg: 'You are required to input both a title and text for each note!'})
      // create new note variable if input given
      } else if (title && text) {
            const newNote = {
                  title,
                  text,
                  id: uuidv4()
            }

            // function from fsutils, append to db
            readAndAppend(newNote, `${db}`)

            // successful response
            const response = {
                  status: "success",
                  body: newNote,
                };
                res.json(response);
            // error response
            } else {
              res.json(`Oh no :( there's been an error appending your note`);
      }
    
})

// delete route
notes.delete(`/:id`, (req, res) => {
      // id variable
      const noteID = req.params.id;
      // imported note array
      readFromFile(`${db}`)
      // parse notes
      .then((data) => JSON.parse(data))
      // filter out deleted id and create new note list
      .then((json) => {
            const filteredNotes = json.filter((note) => note !== noteID);
            // update page with filtered list
            writeToFile(`${db}`, filteredNotes);
            res.json('This note has been successfully deleted')
      }) 
})

module.exports = notes;