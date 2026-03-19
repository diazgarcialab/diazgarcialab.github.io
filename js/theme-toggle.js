// Theme toggle: light/dark mode with localStorage persistence
// Matches VineyardDB frontend approach

(function () {
  const STORAGE_KEY = "lab-theme";

  function getPreferredTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    // Update toggle button icon if it exists
    const btn = document.querySelector(".theme-toggle");
    if (btn) {
      btn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
      btn.innerHTML = theme === "dark"
        ? '<i class="fa-solid fa-sun fa-lg"></i>'
        : '<i class="fa-solid fa-moon fa-lg"></i>';
    }
  }

  // Apply theme immediately to prevent flash
  applyTheme(getPreferredTheme());

  // Listen for toggle clicks once DOM is ready
  window.addEventListener("load", function () {
    applyTheme(getPreferredTheme());

    // Theme toggle
    var btn = document.querySelector(".theme-toggle");
    if (btn) {
      btn.addEventListener("click", function () {
        var current = document.documentElement.getAttribute("data-theme") || getPreferredTheme();
        var next = current === "dark" ? "light" : "dark";
        localStorage.setItem(STORAGE_KEY, next);
        applyTheme(next);
      });
    }

    // Mobile nav hamburger toggle
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

  // Listen for system preference changes
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
    if (!localStorage.getItem(STORAGE_KEY)) {
      applyTheme(e.matches ? "dark" : "light");
    }
  });
})();
