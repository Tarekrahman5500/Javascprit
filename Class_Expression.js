try {
    let user = class myclass {
        Sayhi() {
            console.log(myclass);
        }
    };
    new user().Sayhi();
    console.log(myclass);
} catch (e) {
    console.log(e);
}