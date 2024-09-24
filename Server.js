// Import 'createServer' function from the 'http' module to create an HTTP server
import { createServer } from 'http';

// Create an HTTP server that responds with 'hello world' when a request is made
const server = createServer((req, res) => {
    // End the response by sending an HTML heading element as the content
    res.end('<h1>hello world</h1>');
});

// Start the server and listen on port 3000
// Once the server is running, log a message indicating that it's running on port 3000
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
