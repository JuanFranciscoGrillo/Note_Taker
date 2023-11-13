const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, './db/db.json');

function readNotes() {
    try {
        const data = fs.readFileSync(dbPath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading notes:', err);
        return [];
    }
}

function writeNotes(notes) {
    try {
        const data = JSON.stringify(notes, null, 4);
        fs.writeFileSync(dbPath, data);
    } catch (err) {
        console.error('Error writing notes:', err);
    }
}

module.exports = { readNotes, writeNotes };
