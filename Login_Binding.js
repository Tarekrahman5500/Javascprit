const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function askPassword(ok, fail) {
     let password = rl.question('Password?', (answer) => {
        console.log(answer);
        if (answer === "rockstar") ok();
        else fail();
        rl.close();
    });


}

let user = {
    name: 'John',

    loginOk() {
        console.log(this.name+ ' logged in');
    },

    loginFail() {
        console.log(this.name+ ' failed to log in');
    },

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
 let a = readline;
