const Window = require('window');

const window = new Window();
let code = 'console.log("Hello")';
eval(code); // Hello

let value = eval('let i = 0; ++i');
console.log(value); // 1

let a = 1;

function f() {
    let a = 2;

    eval('console.log(a)'); // 2
}

f()

let x = 1;
{
    let x = 5;
    window.eval('console.log(x)'); // 1 (global variable)
}