class Thenables {
    constructor(num) {
        this.num = num;
    }

    then(resole, reject) {
        console.log(resole);
        setTimeout(
            () => resole(this.num * 2), 1000
        );
    }
}

new Promise(resolve => resolve(1))
    .then(result => {
            return new Thenables(result);
        }
    ).then(console.log)