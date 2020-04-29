try {
    let obj = {/* let's say we have an object */};


    let result1 = process(obj); // calculated

// ...later, from another place of the code...
    let result2 = process(obj); // remembered result taken from cache


// ...later, when the object is not needed any more:
    obj = null;

    alert(cache.size); // 1 (Ouch! The object is still in cache, taking memory!)////
} catch (e) {
    console.log(e);
}