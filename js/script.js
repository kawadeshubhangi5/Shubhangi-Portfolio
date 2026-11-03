
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill all fields.");
            return;
        }

        const subject = encodeURIComponent(
            "Portfolio Contact Message from " + name
        );

        const body = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\nMessage: " + message
        );

        window.location.href =
            "mailto:kawadeshubhangi5@gmail.com?subject=" +
            subject + "&body=" + body;

    });

}
