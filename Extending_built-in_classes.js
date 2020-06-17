class array extends Array {
    is_Empty() {
        return this.length === 0;
    }
    // built-in methods will use this as the constructor
    static get [Symbol.species]() {
        return Array;
    }
}

let arr = new array(1, 2, 5, 10, 50);
console.log(arr.is_Empty());

let filter_arr = arr.filter(item => item >= 10);
console.log(filter_arr);
console.log(arr.is_Empty());
