try {
    let x = 1;

    function func() {

        console.log(this.x); // ?

        let x = 2;
    }

    func();
} catch (e) {
    console.log(e);

}
