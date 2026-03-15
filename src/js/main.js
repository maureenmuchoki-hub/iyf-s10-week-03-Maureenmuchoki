// -----------------------------
// Contact Form Handler
// -----------------------------
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent actual submission

            // Get values
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            // Validate
            if (!name || !email || !message) {
                alert("Please fill in all fields!");
                return;
            }

            // Demo success
            alert(`Thanks ${name}! Your message has been received.`);
            contactForm.reset();
        });
    }

    // -----------------------------
    // Navigation Clicks (Optional)
    // -----------------------------
    // Your Address link opens another page, so nothing extra is needed here.
});