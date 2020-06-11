class Button {
    constructor(value) {
        this.value = value;
        this.click = this.click.bind(this);
    }
    click() {
        console.log("hi");
    }
    /*click = () => {
        alert(this.value); if use it 4th not need
    }*/
}

setTimeout(new Button("hello").click, 1000);