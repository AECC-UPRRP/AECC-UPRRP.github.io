function show() {
    document.getElementById("start").style.display = "block";
    document.getElementById("click").style.display = "none";
}

function check() {
    var pin = document.getElementById("pin").value;
    console.log(pin);
    console.log(typeof(pin));
    if (pin === "4030") {
        document.getElementById("hack").style.display = "block";
    }
}
