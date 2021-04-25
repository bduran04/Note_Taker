//responsible for routing one page to another
// const router = require('express').Router();
const path = require('path');

module.exports = (app) => {
//in the quotes, from this file to file like to send 
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../public/notes.html')));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

}