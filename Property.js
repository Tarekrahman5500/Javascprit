'use strict';
let animal = {
    eats: true
};
let rabbit = Object.create(animal);
console.log(rabbit.eats);
console.log(Object.getPrototypeOf(rabbit) === animal)

Object.setPrototypeOf(rabbit, {});
console.log(rabbit.eats);

let cat = Object.create(animal, {

    Sleep: {
        value: true
    }
});
console.log(cat.Sleep);

let chineseDictionary = Object.create(null);
chineseDictionary.hello = "你好";
chineseDictionary.bye = "再见";

console.log(Object.key(chineseDictionary));

// let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));

let dictionary = Object.create(null, {
    toString: { // define toString property
        value() { // the value is a function
            return Object.keys(this).join();
        }
    }
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

// apple and __proto__ is in the loop
for (let key in dictionary) {
    console.log(key); // "apple", then "__proto__"
}

// comma-separated list of properties by toString
console.log(dictionary); // "apple,__proto__"