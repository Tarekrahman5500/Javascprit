function printnumbers(from, to) {
    let current = from;

    let timeid = setInterval(function () {
        console.log(current);
        if (current === to) {
            clearInterval(timeid);
        }
        current = current + 1;
    }, 1000);
}

printnumbers(5, 10);