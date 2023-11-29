// Import the necessary modules
const router = require('express').Router();
const { readNotes, writeNotes } = require('./fileUtils');
const { v4: uuidv4 } = require('uuid');

// Handle GET request to /api/notes
router.get('/api/notes', (req, res) => {
    // Read the notes from the file
    const notes = readNotes();
    // Send the notes as a JSON response
    res.json(notes);
});

// Handle POST request to /api/notes
router.post('/api/notes', (req, res) => {
    // Create a new note object with a unique ID
    const newNote = { ...req.body, id: uuidv4() };

    // Read the existing notes from the file
    let notes = readNotes();
    // Add the new note to the existing notes
    notes.push(newNote);
    // Write the updated notes to the file
    writeNotes(notes);

    // Send the new note as a JSON response
    res.json(newNote);
});

// Handle DELETE request to /api/notes/:id
router.delete('/api/notes/:id', (req, res) => {
    // Get the ID of the note to be deleted from the request parameters
    const noteId = req.params.id;
    // Read the existing notes from the file
    let notes = readNotes();
    // Filter out the note with the specified ID
    notes = notes.filter(note => note.id !== noteId);
    // Write the updated notes to the file
    writeNotes(notes);
    // Send a success message as a JSON response
    res.json({ message: 'Note deleted successfully' });
});

// Export the router module
module.exports = router;