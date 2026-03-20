// Mobile nav hamburger toggle
window.addEventListener("load", function () {
  var navToggle = document.querySelector(".nav_toggle");
  var navRow = document.querySelector(".nav_row");
  if (navToggle && navRow) {
    navToggle.addEventListener("click", function () {
      var isOpen = navRow.classList.toggle("open");
      navToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark fa-lg"></i>'
        : '<i class="fa-solid fa-bars fa-lg"></i>';
    });
    // Close nav when a link is clicked
    navRow.querySelectorAll(".nav_link").forEach(function (link) {
      link.addEventListener("click", function () {
        navRow.classList.remove("open");
        navToggle.innerHTML = '<i class="fa-solid fa-bars fa-lg"></i>';
      });
    });
  }
});
