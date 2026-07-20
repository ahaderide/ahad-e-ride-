function startRide() {
    function login() {
    const mobile = document.getElementById("mobile").value;

    if (mobile.length != 10) {
        alert("Please enter a valid 10-digit mobile number");
        return;
    }

    alert("Login Successful");
}
    const pickup = document.querySelectorAll("input")[0].value;
    const drop = document.querySelectorAll("input")[1].value;

    if (pickup === "" || drop === "") {
        alert("Please enter Pickup and Drop Location");
        return;
    }

    alert("Ride Booked!\n\nPickup: " + pickup + "\nDrop: " + drop);
}
function login() {
    let mobile = document.getElementById("mobile").value;

    if (mobile.length !== 10) {
        alert("Please enter a valid 10-digit mobile number");
        return;
    }

    alert("OTP Sent to " + mobile);
}
