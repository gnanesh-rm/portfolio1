// 1. Mobile Navigation Toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close mobile menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// 2. Dynamic Footer Year
document.getElementById("year").textContent = new Date().getFullYear();

// 3. Contact Form Handler (Frontend Demo + Mailto Fallback)
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Replace [YOUR_EMAIL@example.com] with your actual email address
  const recipientEmail = "[YOUR_EMAIL@example.com]";
  const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );

  formStatus.textContent =
    "Opening your default email client to send the message...";

  window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  contactForm.reset();
});