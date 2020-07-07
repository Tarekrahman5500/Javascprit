let range = {
    from: 1,
    to: 5,
    // for..of calls this method once in the very beginning
    [Symbol.asyncIterator]() {
        // ...it returns the iterator object:
        // onward, for..of works only with that object,
        // asking it for next values using next()
        return {
            current: this.from,
            last: this.to,

            // next() is called on each iteration by the for..of loop\
            async next() {
                // it should return the value as an object {done:.., value :...}
                // can use await inside, do async stuff:
                await new Promise(resolve => setTimeout(resolve, 1000)); // (3)

                if (this.current <= this.last) {
                    return {
                        done: false,
                        value: this.current++ //= this.current + 1
                    };
                } else {
                    return {
                        done: true
                    };
                }
            }
        };
    }
};
(async () => {
    for await (let value of range) {
        console.log(value);
    }
})()