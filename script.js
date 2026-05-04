document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // stops page refresh
            alert("Thank you! Your message has been sent. Please allow 24-48 hours for a response.");
        });
    }

});

function showMessage(){
    alert("Get 10% off your first custom order!");
}
