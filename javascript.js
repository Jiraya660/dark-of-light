const changeThemeBtn = document.querySelector("#change-theme");

// Toggle dark mode
function toggleDarkmode() {
  document.body.classList.toggle("dark");
}

// Load light or dark mode
function loadTheme() {
    const darkMode = localStorage.getItem("dark");

    if(darkMode) {
      toggleDarkmode();
    }
}

loadTheme ();

changeThemeBtn.addEventListener("change", function() {
  toggleDarkmode();

  // Save or remove dark mode
  localStorage.removeItem("dark");

    if(document.body.classList.contains("dark") ) {
      localStorage.setItem("dark", 1);
    }
});