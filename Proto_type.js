let obj = {};

console.log(obj.__proto__ === Object.prototype); // true
// obj.toString === obj.__proto__.toString == Object.prototype.toString
console.log(Object.prototype.__proto__);

let arr = [1, 2, 3];

console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__ === Object.prototype);
console.log(arr.__proto__.__proto__.__proto__); // null)

function f() {
}

console.log(f.__proto__ === Function.prototype); // true
console.log(f.__proto__.__proto__ === Object.prototype); // true, inherit from objects

String.prototype.show = function () {
    console.log(this);
};
"abc".show();

if (!String.prototype.repeat) {

    String.prototype.repeat = function (n) {

        return new Array(n + 1).join(this);
    }
}

console.log("La".repeat(3)); // LaLaLa

let object = {
    0: "hi",
    1: "me",
    length: 3
};
object.join = Array.prototype.join;

console.log(object.join(','))

Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
};

function fa() {
    console.log("Hello!");
}

fa.defer(1000); // shows "Hello!" after 1 sec

Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
        setTimeout(() => f.apply(this, args), ms);
    }
};

// check it
function fi(a, b) {
    console.log( a + b );
}

fi.defer(1000)(1, 2); // shows 3 after 1 sec
