const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');


require('./pwd');

//Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //remove the newline

  if (cmd === 'pwd'){
      console.log(pwd);
  }

  if (cmd === 'ls'){
    ls(done);
  }


  if (cmd.includes('cat')){
      console.log(cmd.slice(4));
      cat(cmd.slice(4));
  }

  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
});


const done = (output) => {
    process.stdout.write(output);
}