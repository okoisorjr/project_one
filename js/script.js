const menuButton = document.getElementById("menuButton");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

// Get the current page URL (path only)
const currentPath = window.location.pathname;

// Get all links with the class 'nav-link'
const navLinks = document.querySelectorAll(".nav-link");

const dropdownButton = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");

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

// Dropdown Toggle Script
dropdownButton.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hidden");
});

// Close the dropdown if clicked outside
window.addEventListener("click", function (e) {
  if (!dropdownButton.contains(e.target)) {
    dropdownMenu.classList.add("hidden");
  }
});

function scrollToSection(sectionId) {
  console.log(mobileMenu.classList);
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
  } else {
    mobileMenu.classList.add("hidden");
  }
  document.getElementById(sectionId).scrollIntoView({
    behavior: "smooth", // Makes the scroll smooth
  });
}
