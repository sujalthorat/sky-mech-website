// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.name.value;
  const email = this.email.value;
  const message = this.message.value;

  const mailtoLink = `mailto:skymech.kop@gmail.com?subject=Website Enquiry from ${name}&body=Email: ${email}%0A%0A${message}`;

  window.location.href = mailtoLink;
});

