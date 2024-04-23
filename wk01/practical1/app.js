const path = require('node:path');
const chalk = require('chalk');

const notes = './files/notes.txt';

path.dirname(notes); // /users/joe
path.basename(notes); // notes.txt
path.extname(notes); // .txt

const fs = require('node:fs');

fs.readFile('./files/test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

const fs2 = require('node:fs');

const content = 'Some content!';

fs2.writeFile('./files/test.txt', content, err => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
    console.log("write success");
  }
});

console.log(chalk.yellow('hi'));