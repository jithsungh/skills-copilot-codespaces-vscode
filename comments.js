// Create web server

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


// Middleware to parse JSON bodiesapp.use(bodyParser.json());
app.use(bodyParser.json());
// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
// Middleware to serve static files from the 'public' directory
app.use(express.static('public'));
// Middleware to handle CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
    }
);
// Middleware to handle errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
}
);
// Middleware to handle 404 errors
app.use((req, res, next) => {
    res.status(404).send('Not Found');
}
);
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}
);
// Export the app for testing purposes
module.exports = app;