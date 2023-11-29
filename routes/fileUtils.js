// Import the fs module to work with the file system
const fs = require('fs');

// Import the path module to work with file paths
const path = require('path');

// Set the path to the db.json file
const dbPath = path.join(__dirname, 'db', 'db.json');

// Function to read notes from db.json
const readNotes = () => {
    try {
        // Read the contents of db.json file
        const data = fs.readFileSync(dbPath, 'utf8');
        // Parse the data as JSON and return it
        return JSON.parse(data);
    } catch (err) {
        // If there is an error reading the file, log the error and return an empty array
        console.error('Error reading from db.json:', err);
        return [];
    }
};

// Function to write notes to db.json
const writeNotes = (notes) => {
    try {
        // Convert the notes array to JSON format
        const data = JSON.stringify(notes, null, 4);
        // Write the JSON data to db.json file
        fs.writeFileSync(dbPath, data);
    } catch (err) {
        // If there is an error writing to the file, log the error
        console.error('Error writing to db.json:', err);
    }
};

// Export the readNotes and writeNotes functions
module.exports = { readNotes, writeNotes };