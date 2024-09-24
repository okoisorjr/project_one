const menuButton = document.getElementById("menuButton");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

// Get the current page URL (path only)
const currentPath = window.location.pathname;

// Get all links with the class 'nav-link'
const navLinks = document.querySelectorAll(".nav-link");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});

// Loop through the links and add 'active' class to the link that matches the current path
navLinks.forEach((link) => {
  // Compare link href to the current path
  if (link.getAttribute("href") === currentPath) {
    console.log(currentPath);
    link.classList.add("primary-text"); // Add the active class (change text color)
    link.classList.remove("text-gray-500"); // Optionally remove default text color
  }
});
