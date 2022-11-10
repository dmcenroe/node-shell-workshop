const fs = require('fs');


module.exports = (fileName) => {
    return fs.readFile(fileName, (err, data) => {
        if (err) {
          throw err;
        } else {
          process.stdout.write(data);
          process.stdout.write('prompt > ');
        }
      });
} 