function* f() {
    yield 1;
    yield 2;
    return  3
}
console.log(f().next());
console.log(JSON.stringify(f().next()));
console.log(f().next());
let generator = f();
let one = generator.next();
console.log(JSON.stringify(one));


let two = generator.next();
console.log(JSON.stringify(two));
let three = generator.next();
console.log(JSON.stringify(three));
let generator1 = f();
for(let value of generator1) {
    console.log(value); // 1, then 2 if last is yield 3 so it show
}

let sequence = [0, ...f()];
console.log(sequence);

let range = {
    from: 1,
    to: 5,

    // for..of range calls this method once in the very beginning
    [Symbol.iterator]() {
        // ...it returns the iterator object:
        // onward, for..of works only with that object, asking it for next values
        return {
            current: this.from,
            last: this.to,

            // next() is called on each iteration by the for..of loop
            next() {
                // it should return the value as an object {done:.., value :...}
                if (this.current <= this.last) {
                    return { done: false, value: this.current++ };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

// iteration over range returns numbers from range.from to range.to
console.log([...range]); // 1,2,3,4,5