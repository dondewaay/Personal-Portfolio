/* DARK THEME */

let darkMode = localStorage.getItem("darkMode")
const darkModeToggle = document.getElementById("dark-mode-toggle")
const darkLightDefault = window.matchMedia("(prefers-color-scheme: dark)")

function enableDarkMode() {
    document.body.classList.add("dark-theme")
    localStorage.setItem("darkMode", "enabled")
    darkModeToggle.innerHTML = "☀️"
}

function disableDarkMode() {
    document.body.classList.remove("dark-theme")
    localStorage.setItem("darkMode", "disabled")
    darkModeToggle.innerHTML = "🌙"
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
} else if (darkMode === "disabled") {
    disableDarkMode()
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    enableDarkMode()
}

/* SCRIPTS */