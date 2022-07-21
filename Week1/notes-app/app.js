const fs = require('fs');

//fs.writeFileSync('notes.txt', 'This file is created by Node');






// Challenge Practice 2


fs.writeFileSync('notes.txt', 'This file is created by Node. ');
fs.appendFileSync('notes.txt', 'Appending a new message.' )

