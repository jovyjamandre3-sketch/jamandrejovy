// Simple typing effect on the home page.
const typing = document.getElementById("typing");
const phrases = ["Student", "Hardworking and Dedicated", "Always Learning"];
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typeText() {
  if (!typing) return;
  const phrase = phrases[phraseIndex];
  typing.textContent = phrase.slice(0, charIndex);
  if (!deleting && charIndex < phrase.length) {
    charIndex++;
    setTimeout(typeText, 90);
  } else if (!deleting) {
    deleting = true;
    setTimeout(typeText, 1100);
  } else if (charIndex > 0) {
    charIndex--;
    setTimeout(typeText, 45);
  } else {
    deleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(typeText, 250);
  }
}
typeText();

// Back-to-top button.
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (backToTop) backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});
if (backToTop) {
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

// Basic contact form validation (does not send email by itself).
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("form-message");
    if (!name || !email || !message) {
      status.textContent = "Please fill in all fields.";
      return;
    }
    status.textContent = "Thank you! The form is validated, but a backend is needed to send your message.";
    contactForm.reset();
  });
}
