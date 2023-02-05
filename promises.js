const { readFile } = require('fs/promises');

readFile('example.js', 'utf-8').then((file) => {
    console.log(file)})