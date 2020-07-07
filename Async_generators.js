function* f(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

for (let arrayElement of f(1, 5)) {
    console.log(arrayElement);
}

async function* generateSequence(start, end) {

    for (let i = start; i <= end; i++) {

        // yay, can use await!
        await new Promise(resolve => setTimeout(resolve, 1000));

        yield i;
    }

}

(async () => {

    let generator = generateSequence(1, 5);
    for await (let value of generator) {
        console.log(value); // 1, then 2, then 3, then 4, then 5
    }

})();

let range = {
    from: 1,
    to: 5,

    async *[Symbol.asyncIterator]() { // same as [Symbol.asyncIterator]: async function*()
        for(let value = this.from; value <= this.to; value++) {

            // make a pause between values, wait for something
            await new Promise(resolve => setTimeout(resolve, 1000));

            yield value;
        }
    }
};

(async () => {

    for await (let value of range) {
        console.log(value); // 1, then 2, then 3, then 4, then 5
    }

})();