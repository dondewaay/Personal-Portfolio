/* DARK THEME */

let darkMode = localStorage.getItem("darkMode")
const darkModeToggle = document.getElementById("dark-mode-toggle")

function enableDarkMode() {
    document.body.classList.add("dark-theme")
    localStorage.setItem("darkMode", "enabled")
    darkModeToggle.innerHTML = "🌙"
}

function disableDarkMode() {
    document.body.classList.remove("dark-theme")
    localStorage.setItem("darkMode", null)
    darkModeToggle.innerHTML = "☀️"
}

darkModeToggle.addEventListener('click', function() {
    darkMode = localStorage.getItem("darkMode")
    if (darkMode !== "enabled") {
        enableDarkMode()
    } else {
        disableDarkMode()
    }
})

if (darkMode === "enabled") {
    enableDarkMode()
}

/* SCRIPTS */