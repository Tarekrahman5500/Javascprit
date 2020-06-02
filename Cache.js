function slow(x) {
    // there can be a heavy CPU-intensive job here
    console.log("cache with: "+x);
    return x;
}

function CacheinDecoder(func) {
    let cache = new Map();

    return function (x) {
        if (cache.has(x)) {  // if there's such key in cache
            return cache.get(x);  // read the result from it
        }
        let result = func(x); // otherwise call func

        cache.set(x, result);  // and cache (remember) the result
        return result;
    };

}
slow = CacheinDecoder(slow);
console.log(slow(1)); // in cache 1
console.log("Again "+slow(1));

console.log(slow(2)); // in cache 1
console.log("Again "+slow(2));