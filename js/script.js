const menuButton = document.getElementById("menuButton");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

// Get the current page URL (path only)
const currentPath = window.location.pathname;

// Get all links with the class 'nav-link'
const navLinks = document.querySelectorAll(".nav-link");

const dropdownButton = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");

const dropdownButton2 = document.getElementById("dropdownButton2");
const dropdownMenu2 = document.getElementById("dropdownMenu2");

const dropdownMenuMobile = document.getElementById("dropdownMenuMobile");
const dropdownMenuMobile2 = document.getElementById("dropdownMenuMobile2");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});

// Loop through the links and add 'active' class to the link that matches the current path
/* navLinks.forEach((link) => {
  // Compare link href to the current path
  if (
    link.getAttribute("href") === currentPath ||
    link.getAttribute("href").includes(currentPath)
  ) {
    console.log(true);
    link.classList.add("primary-text"); // Add the active class (change text color)
    link.classList.remove("text-gray-500"); // Optionally remove default text color
  }
}); */

// Dropdown Toggle Script
dropdownButton.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hidden");
});

// Close the dropdown if clicked outside
window.addEventListener("click", function (e) {
  if (!dropdownButton.contains(e.target)) {
    dropdownMenu.classList.add("hidden");
  }
  if (!dropdownButton2.contains(e.target)) {
    dropdownMenu2.classList.add("hidden");
  }
});

dropdownButton2.addEventListener("click", () => {
  dropdownMenu2.classList.toggle("hidden");
});

function toggleMobileMenuDropdown(id) {
  console.log(id);
  if (id === "about-us" && !dropdownMenuMobile2.classList.contains("hidden")) {
    dropdownMenuMobile2.classList.add("hidden");
    dropdownMenuMobile.classList.toggle("hidden");
    return;
  }
  if (id === "services" && !dropdownMenuMobile.classList.contains("hidden")) {
    dropdownMenuMobile.classList.add("hidden");
    dropdownMenuMobile2.classList.toggle("hidden");
    return;
  }
  if (id === "about-us" && dropdownMenuMobile2.classList.contains("hidden")) {
    dropdownMenuMobile.classList.toggle("hidden");
  }
  if (id === "services" && dropdownMenuMobile.classList.contains("hidden")) {
    dropdownMenuMobile2.classList.toggle("hidden");
  }
}
