// script.js
document.getElementById("heroBtn").addEventListener("click", () => {
    window.scrollTo({
        top: document.getElementById("about").offsetTop,
        behavior: "smooth"
    });
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const status = document.getElementById("formStatus");

    if (!name.value || !email.value || !message.value) {
        status.textContent = "Please fill all fields.";
        status.style.color = "red";
        return;
    }

    status.textContent = "Message sent successfully.";
    status.style.color = "green";
    this.reset();
});
