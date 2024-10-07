// console.log('Hello, world!');
import fs from 'fs';

// Read

fs.readFile('./hello.txt', (err, data) => {
    // time how long it takes to run this function
    console.time('funchallenge');
    if (err) {
        console.error(err);
    }
    console.log('1', data.toString('utf8'));
    console.timeEnd('funchallenge'); 
});

// Sync

const file = fs.readFileSync('./hello.txt');
console.log('2', file.toString());

// Append
fs.appendFile('./hello.txt', ' This is so cool!', err => {
    if (err) {
        console.error(err);
    }
});

//write
fs.writeFile('bye.txt', 'Sad to see you go', err => {
    if (err) {
        console.error(err);
    }
});

//delete
fs.unlink('./bye.txt', err => {
    if (err) {
        console.error(err);
    }
    console.log('Inception');
});

//