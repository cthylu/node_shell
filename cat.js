const fs = require('fs');

module.exports = function (cmd, filename) {
    if (cmd === 'cat') {
        fs.readFile('./'+filename, 'utf8', function (err, data) {
            if (err) {
                console.log('Error!' + error);
            }
            else {
                console.log(data.toString());
                process.stdout.write('\nprompt > ');
            }
        });
    }
}