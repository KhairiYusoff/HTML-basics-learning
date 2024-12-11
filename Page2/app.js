// Simple SPA Navigation Logic
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  const pages = document.querySelectorAll(".page");
  const learnMoreBtn = document.getElementById("learnMoreBtn");
  const contactForm = document.getElementById("contactForm");

  // Navigation Function
  function navigateTo(targetId) {
    // Hide all pages
    pages.forEach((page) => {
      page.classList.remove("active");
    });

    // Show target page
    const targetPage = document.getElementById(targetId);
    if (targetPage) {
      targetPage.classList.add("active");
    }
  }

  // Add click event to navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      navigateTo(targetId);
    });
  });

  // Learn More button functionality
  if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", () => {
      navigateTo("about");
    });
  }

  // Contact Form Submission
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for your message! We will get back to you soon.");
      contactForm.reset();
    });
  }

  // Default to Home page on load
  navigateTo("home");
});
