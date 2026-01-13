// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Contact Form (mailto)
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const subject = "New Enquiry from Sky Mech Website";
  const body =
    "Name: " + name + "%0D%0A" +
    "Phone: " + phone + "%0D%0A" +
    "Email: " + email + "%0D%0A%0D%0A" +
    "Message:%0D%0A" + message;

  window.location.href =
    "mailto:skymech.kop@gmail.com," +
    "?subject=" + subject +
    "&body=" + body;
});
