const fs = require('fs');

// `files` will be an array of filenames, like ['bash.js', 'pwd.js']


   module.exports = (done) => { fs.readdir('./', 'utf8', (err, files) => {
        if (err) {
          throw err;
        } else {
          done(files.join('\n'));
          done('prompt > ');
        }
      });
    }



