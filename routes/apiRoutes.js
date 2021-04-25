//responsible to route from server to front end 
// const router = require('express').Router();
const notesDB = require('../db/db.json')
const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

module.exports = (app) => {

//routes to match front end 
app.get('/api/notes', (req, res) => {
  const notes = JSON.parse(fs.readFileSync('./db/db.json'));
  res.json(notes);
});

app.post('/api/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json'));
    const newNote = req.body;
    newNote.id = uuid.v4();
    notes.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    res.json(newNote);
  });

// Displays a single character, or returns false
app.delete('/api/notes/:id', (req, res) => {
  const notes = JSON.parse(fs.readFileSync('./db/db.json'));
  const delNote = req.params.id;
  let filteredNotes = notes.filter((note) => 
    !(note.id == delNote))
    fs.writeFileSync('./db/db.json', JSON.stringify(filteredNotes));
    res.json(filteredNotes);
  })
}
// module.exports = app;
  