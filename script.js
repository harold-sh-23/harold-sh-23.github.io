document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // stops page refresh

    const messageBox = document.getElementById("form-message");

    messageBox.textContent = "This is a demo. The submit form will be available through active formspree. Thank you for visiting my site";
    messageBox.style.color = "green";

    this.reset(); // clears form
});

function showWelcomeMessage() {
    alert("Thank you for taking the time and visiting Wood Creations Website. I hope you have enjoyed viewing many of the Wood Creations Designs and Images. Have a nice day...");
}

function showVenmoMessage() {
    alert("This is a forms of payment that can be used when purchasing items from Wood Creations.");
}
