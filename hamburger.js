
const hamburger = document.querySelector(".hamburger-icon");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeMenu");
const mobileLinks = document.querySelectorAll(".mobile-link");

// Open menu
hamburger.addEventListener("click", () => {
  mobileMenu.style.display = "block";
  setTimeout(() => {
    mobileMenu.style.width = "250px";
  }, 10); // allow transition
});

// Close menu function
function closeMenu() {
  mobileMenu.style.width = "0";
  setTimeout(() => {
    mobileMenu.style.display = "none";
  }, 300); // match CSS transition
}

// Close when clicking X
closeBtn.addEventListener("click", closeMenu);

// Close when clicking any link
mobileLinks.forEach(link => {
  link.addEventListener("click", closeMenu);
});

// Close when clicking outside the menu
window.addEventListener("click", (e) => {
  const isClickInsideMenu = mobileMenu.contains(e.target);
  const isClickOnHamburger = hamburger.contains(e.target);
  
  if (!isClickInsideMenu && !isClickOnHamburger && mobileMenu.style.width === "250px") {
    closeMenu();
  }
});

