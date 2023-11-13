// fileUtils.js
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../db/db.json');

const readNotes = () => {
    try {
        const notes = fs.readFileSync(dbPath, 'utf8');
        return JSON.parse(notes);
    } catch (err) {
        console.error('Error reading file:', err);
        return [];
    }
};

const writeNotes = (notes) => {
    try {
        fs.writeFileSync(dbPath, JSON.stringify(notes, null, 4));
    } catch (err) {
        console.error('Error writing file:', err);
    }
};

module.exports = { readNotes, writeNotes };
