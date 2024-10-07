// import express from 'express';
// import bodyParser from 'body-parser';
// const app = express();

// const HOST = 'localhost'; // You can also use '0.0.0.0' for all interfaces
// const PORT = 3000;

// // Routes
// // app.use(bodyParser.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));



// app.get('/', (req, res) => {
//     // console.log(req.query);
//     // req.body
//     // console.log(req.header);
//     console.log(req.params);
//     res.send('getting root');
// });

// app.get('/:id', (req, res) => {
//     console.log(req.params);
//     res.send('Id is ' + req.params.id);
// });

// // app.get('/about', (req, res) => {
// //     res.send('About Us');
// // });

// // app.get('/contact', (req, res) => {
// //     res.send('Contact Us');
// // });

// // app.post('/profile', (req, res) => {
// //     console.log(req.body)
// //     const user = {
// //         name: 'John Doe',
// //         age: 25
// //     };
// //     // Logic to delete the user would go here
// //     res.send("Success");
// // });

// // Start the server
// app.listen(PORT, HOST, () => {
//     console.log(`Server is running at http://${HOST}:${PORT}/`);
// });




import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.static(__dirname + '/Public'));

app.listen(3000);