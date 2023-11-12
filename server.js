const express = require('express');
const apiRoutes = require('./routes/apiRoutes'); 
const htmlRoutes = require('./routes/htmlRoutes'); /

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Use the routes
app.use('/api', apiRoutes); // Prefixing with '/api' to differentiate API routes
app.use('/', htmlRoutes); // HTML routes are still served from the root

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
