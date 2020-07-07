function curry1(f) { // curry(f) does the currying transform
    return function(a) {
        return function(b) {
            return f(a, b);
        };
    };
}

// usage
function sum1(a, b) {
    return a + b;
}

let curriedSum = curry1(sum1);

console.log( curriedSum(1)(2) ); // 3

function curry(func) {
    let globalArgs = [];

    let resultFunc = function curryFunc(...args) {
        globalArgs.push(...args);
        return curryFunc;
    };

    resultFunc[Symbol.toPrimitive] = function () {
        return func(...globalArgs);
    };

    return resultFunc;
}

function sum(a, b, c) {
    return a + b + c;
}

let currySum = curry(sum);

console.log( sum(10, 20, 30) );
console.log( currySum(10)(20, 30) );