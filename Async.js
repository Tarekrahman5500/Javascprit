async function f() {
    return 1;
    //  return Promise.resolve(1);
}

f().then(console.log);

async function f1() {
    let value = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done'), 1000)
    });

    let result = await value;
    console.log(result);
}

f1();

class Thenables {
    constructor(num) {
        this.num = num;
    }

    then(resolve, reject) {
        console.log(resolve);
        setTimeout(() => resolve(this.num * 2), 1000);
    }
}

async function f2() {
    let result = await  new Thenables(1);
    console.log(result);
}

f2();

class Waiter {
    async wait() {
        return 7;
    }
}

new Waiter()
.wait()
.then(console.log)