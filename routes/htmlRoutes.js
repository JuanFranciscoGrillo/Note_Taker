// Import the 'path' module
const path = require('path');

// Import the 'express' module and create a router
const router = require('express').Router();

// Handle GET requests to '/notes' endpoint
router.get('/notes', (req, res) => {
    // Send the 'notes.html' file as the response
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// Handle all other GET requests
router.get('*', (req, res) => {
    // Send the 'index.html' file as the response
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Export the router module
module.exports = router;