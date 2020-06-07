
let user = {

    get name() {
        return this._name;
    },

    set name(value) {

        if (value.length < 4) {
            console.log("Too sort");
            return;
        }
        this._name = value;
    }
};
user.name = 'tarek';
console.log(user.name);
user.name = ' ';
console.log(user.name);