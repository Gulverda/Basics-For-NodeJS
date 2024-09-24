// Import 'express' to create a web server
import express from 'express';

// Initialize the 'express' app
const app = express();

// Define a 'user' object with name, surname, and age properties
const user = {
    name: 'John',
    surname: 'Doe',
    age: 30,
};

// Define a route for the root URL ('/') that sends 'Hello, World!' as the response
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Define a route for '/user' that sends a personalized greeting with the user's name, surname, and age
app.get('/user', (req, res) => {
    res.send(`Hello, ${user.name} ${user.surname} ${user.age}`);
});

// Start the server and listen on port 3000
// Once the server is running, log the URL where it's accessible
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
