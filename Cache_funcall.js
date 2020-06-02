try {
    let worker = {
        someMethod() {
            return 1;
        },
        slow(x) {
            // there can be a heavy CPU-intensive job here
            console.log("cache with: " + x);
            // return x;
            return x * this.someMethod(); // (*)
        }
    };

    function CacheinDecoder(func) {
        let cache = new Map();

        return function (x) {
            if (cache.has(x)) {  // if there's such key in cache
                return cache.get(x);  // read the result from it
            }
            let result = func.call(this,x); // otherwise call func

            cache.set(x, result);  // and cache (remember) the result
            return result;
        };

    }

//slow = CacheinDecoder(slow);
    console.log(worker.slow(1)); // in cache 1
//console.log("Again "+slow(1));
    worker.slow = CacheinDecoder(worker.slow); // now make it caching

    console.log(worker.slow(2)); // Whoops! Error: Cannot read property 'someMethod' of undefinedslow(2)); // in cache 1
    let func = worker.slow;
    func(2);
//console.log("Again "+slow(2));
} catch (e) {
    console.log(e);

}