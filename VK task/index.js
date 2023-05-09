function clearForm() {
    document.getElementById("booking-form").reset();
}

document.getElementById("booking-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let tower = document.getElementById("tower").value;
    let floor = document.getElementById("floor").value;
    let room = document.getElementById("room").value;
    let date = document.getElementById("date").value;
    let comment = document.getElementById("comment").value;

    let formData = {
        tower: tower,
        floor: floor,
        room: room,
        date: date,
        comment: comment
    };

    console.log(JSON.stringify(formData));
});