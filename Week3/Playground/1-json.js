const fs = require('fs');
const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book);
//fs.writeFileSync('1-json.json',bookJSON);
//console.log(bookJSON);
const dataBuffer = fs.readFileSync('1-json.json');
// try console.log(dataBuffer) // buffer because data will come in binary format
const dataJSON = dataBuffer.toString();
console.log(dataJSON);
const data = JSON.parse(dataBuffer);
console.log(data);
//const bookParsed = JSON.parse(bookJSON);
//console.log(bookParsed.title);
