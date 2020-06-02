function work(a, b) {
    console.log(a + b);
}

work = spy(work);
work(1, 2);
work(4, 5);

for (let arrayElement of work.calls) {
    console.log('call: ' + arrayElement.join());
}

function spy(func) {
    function wrapper(...args) {
        wrapper.calls.push(args);
        return func.apply(this, args);
    }

    wrapper.calls = [];

    return wrapper;
}