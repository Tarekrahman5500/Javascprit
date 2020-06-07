let user = {};
Object.defineProperty(this, 'age', {
    get() {

        let today_year = new Date().getFullYear();
        return today_year - this.birthday.getFullYear();
    },
    set(value) {

        let birth_year = new Date().getFullYear() - value;
        this.birthday = new Date(birth_year, now.getMonth(), now.getDay());
    }
});

//let tarek = new user('tarek', new Date(1998, 3, 1));

//console.log(tarek.this.birthday);