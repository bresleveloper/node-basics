

console.log('hello to my READER node app');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt('guess> ');
rl.prompt();
rl.on('line', function(line) {
    if (line === "right") rl.close();
    console.log('so u say that you ' + line);
    rl.prompt();
}).on('close',function(){
    process.exit(0);
});


