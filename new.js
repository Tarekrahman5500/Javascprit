const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let s = String.fromCharCode(0b0, 97, 118, 97, 115, 99, 114, 105, 112, 116);
console.log(String.fromCharCode(0b0))


rl.on('line', (input) => {
    console.log(`Received: ${input}`);

});

console.log(`hi`);

rl.on("close", function() {
    //console.log("\nBYE BYE !!!");
    process.exit(0);
});