// Import the express module
const express = require('express');

// Import the htmlRoutes module
const htmlRoutes = require('./routes/htmlRoutes');

// Import the apiRoutes module
const apiRoutes = require('./routes/apiRoutes');

// Create an instance of the express application
const app = express();

// Set the port number to either the environment variable PORT or 3000
const PORT = process.env.PORT || 3000;

// Parse JSON data in the request body
app.use(express.json());

// Parse URL-encoded data in the request body
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Use the htmlRoutes module for routes starting with '/'
app.use('/', htmlRoutes);

// Use the apiRoutes module for routes starting with '/'
app.use('/', apiRoutes);

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});