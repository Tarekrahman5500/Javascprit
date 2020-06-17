try {
    class Coffee {
        #water = 200;

        get waterAmount() {
            return this.#water;
        }

        set waterAmount(value) {
            if (value < 0) console.log("Negative water");
            if (value > this.#water) console.log("Too much water");
            this.#water = value;
        }
    }

    let coffeeMachine = new Coffee();

// can't access privates from outside of the class
    coffeeMachine.waterAmount = 1000; //
    console.log(coffeeMachine .#waterAmount); // Error
} catch (e) {
    console.log(e)
}

