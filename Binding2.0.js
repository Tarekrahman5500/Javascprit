let user = {
    firstName: "Tarek"
};

function func(phrase) {
    console.log(phrase + ',' + this.firstName)
}

let funcuser = func.bind(user);

funcuser('hi');
user = {
    firstName: "Tarek",
    say(phrase) {
        console.log(phrase + ',' + this.firstName)
    }
};
let say = user.say.bind(user);
say("Hello");
say("Bye");


