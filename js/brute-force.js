function force() {

    var pin = "";

    for (var i = 0; i < 10000; i++) {
        if (i < 10) {
            pin = "000" + i.toString();
        }

        else if (i >= 10 && i < 100) {
            pin = "00" + i.toString();
        }

        else if (i >= 100 && i < 1000) {
            pin = "0" + i.toString();
        }

        else {
            pin = i.toString();
        }

        document.getElementById("pin").value = pin;
        document.getElementById("hackbutton").click();

        if (document.getElementById("hack").style.display == "block") {
            console.log("The correct pin was " + pin);
            break;
        }
    }
}
