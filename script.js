function startRide() {
    const pickup = document.querySelectorAll("input")[0].value;
    const drop = document.querySelectorAll("input")[1].value;

    if (pickup === "" || drop === "") {
        alert("Please enter Pickup and Drop Location");
        return;
    }

    alert("Ride Booked!\n\nPickup: " + pickup + "\nDrop: " + drop);
}
