const router = require('express').Router();
const { readNotes, writeNotes } = require('./fileUtils');
const { v4: uuidv4 } = require('uuid');

router.get('/api/notes', (req, res) => {
    const notes = readNotes();
    res.json(notes);
});

router.post('/api/notes', (req, res) => {
    const newNote = { ...req.body, id: uuidv4() };

    let notes = readNotes();
    notes.push(newNote);
    writeNotes(notes);

    res.json(newNote);
});

module.exports = router;
