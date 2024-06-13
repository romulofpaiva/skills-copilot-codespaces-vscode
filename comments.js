// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import the comments data
const comments = require('./comments.json');

// Serve static files
app.use(express.static('public'));

// Set up the comments route
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});