function f(x) {
    console.log(x);
}


function delay(f, ms) {
    return function () {
        setTimeout(() => f.apply(this, arguments), ms)
    };

}

let f1000 = delay(console.log, 1000);

f1000("test"); // shows "test" after 1000ms
