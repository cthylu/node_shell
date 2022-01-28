const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');

//output a prompt
process.stdout.write('prompt >');

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    const str = data.toString().trim(); // remove the newline
    const cmd = str.split(' ')[0] // cat bash.js
    const filename = str.split(' ')[1];
    pwd(cmd);
    ls(cmd);
    cat(cmd, filename);
});