// Import the 'fs' module to work with the file system
const fs = require('fs');

// Import the ES6 module 'Until.js' using require and destructure its exports
// 'default' is renamed to 'myname', and we also import 'sum' and 'total'
const { default: myname, sum, total } = require('./Until.js');

// Write 'Hello' to a file named 'note.txt', overwriting the file if it exists
fs.writeFileSync('note.txt', 'Hello\n');

// Append 'myname' (imported from Until.js) to 'note.txt'
fs.appendFileSync('note.txt', myname + '\n');

// Append the value of 'total' (imported from Until.js) to 'note.txt'
fs.appendFileSync('note.txt', total);

// Append the result of 'sum(5, 15)' to 'note.txt' with a new line
fs.appendFileSync('note.txt', sum(5, 15) + '\n');


// Import 'chalk' module to style terminal string outputs
import chalk from 'chalk';

// Create a styled string using 'chalk': red text with bold and inverse styles
const x = chalk.red.inverse.bold('Hello, World!');

// Log the styled string 'x' to the console
console.log(x);


// Import various methods from the 'os' module to gather system-related information
import { platform, homedir, type, userInfo, cpus, arch } from 'os';

// Log platform, home directory, system type, user info, CPU details, and architecture
console.log(platform(), homedir(), type(), userInfo(), cpus(), arch());
