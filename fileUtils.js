
const fs = require('fs');
const path = require('path');

// Path to the db.json file
const dbPath = path.join(__dirname, 'db', 'db.json');

// Function to read notes from db.json
const readNotes = () => {
    try {
        const data = fs.readFileSync(dbPath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading from db.json:', err);
        return [];
    }
};

// Function to write notes to db.json
const writeNotes = (notes) => {
    try {
        const data = JSON.stringify(notes, null, 4);
        fs.writeFileSync(dbPath, data);
    } catch (err) {
        console.error('Error writing to db.json:', err);
    }
};

module.exports = { readNotes, writeNotes };
