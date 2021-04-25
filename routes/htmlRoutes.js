//responsible for routing one page to another
const router = require('express').Router();
const path = require('path');

//in the quotes, from this file to file like to send 
router.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../public/notes.html')));

router.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

module.exports = router;