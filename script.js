document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // stops page refresh

    const messageBox = document.getElementById("form-message");

    messageBox.textContent = "This is a demo. The submit form will be available through active formspree. Thank you for visiting my site";
    messageBox.style.color = "green";

    this.reset(); // clears form
});
