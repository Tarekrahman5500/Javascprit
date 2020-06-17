try {
    class Private_andProtected_properties {
        _water = 0;

        set Amount(value) {
            console.log("hi")
            if (value < 0) console.log("negative");
            this._water = value;
        }

        get Amount() {
            return this._water;
        }

        constructor(power) {
            this._power = power;
        }

        get power() {
            return this._power;
        }
    }

    let coffeeMachine = new Private_andProtected_properties(100);
    coffeeMachine.Amount = -10;

    console.log('Power is: ' + coffeeMachine.power + ' W');
    coffeeMachine.power = 25; //  (no setter)
    console.log('Power is: ' + coffeeMachine.power + ' W');
} catch (e) {
    console.log(e);
}

