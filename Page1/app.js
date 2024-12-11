document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("[data-link]");
  const sections = document.querySelectorAll("section");

  // Function to handle navigation
  const navigateTo = (id) => {
    sections.forEach((section) => {
      section.style.display = section.id === id ? "block" : "none";
    });
  };

  // Add event listeners to navigation links
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const sectionId = link.getAttribute("href").replace("#", "");
      navigateTo(sectionId);
    });
  });

  // Show home section by default
  navigateTo("home");
});
