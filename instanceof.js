class Rabbit {
}

let rabbit = new Rabbit();

// is it an object of Rabbit class?
console.log(rabbit instanceof Rabbit); // true

function rrabbit() {
}

console.log(new rrabbit() instanceof rrabbit); // true

let arr = [1, 2, 3];
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true

class Animal {
    static [Symbol.hasInstance](obj) {
        if (obj.catEat) return true;
    }
}

let obj = {canEat: true};
console.log(obj instanceof Animal);

class _Animal {
}

class _Rabbit extends _Animal {
}

let _rabbit = new _Rabbit();
console.log(_rabbit instanceof _Animal); // true

function func() {
}

let fun = new func();
func.prototype = {};
console.log(fun instanceof func);

let objectToString = Object.prototype.toString;

// what type is this?
 arr = [];

 console.log( objectToString.call(arr) ); // [object Array]

let s = Object.prototype.toString;

console.log( s.call(123) ); // [object Number]
console.log( s.call(null) ); // [object Null]
console.log( s.call(console.log) ); // [object Function]

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

console.log( a instanceof B ); // true

