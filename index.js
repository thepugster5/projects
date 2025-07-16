let lighting = "Dark"
let sounds = "On"
const clickSound = document.getElementById("clickSound")
clickSound.volume = 0.1

function toggleLighting() {
    if (lighting === "Dark") {
        document.body.classList.add("lightMode")
        lighting = "Light"
    } else if (lighting === "Light") {
        document.body.classList.remove("lightMode")
        lighting = "Dark"
    }

    clickSound.currentTime = 0
    clickSound.play()

    saveSettings()
}

function toggleSound() {
    if (sounds === "On") {
        clickSound.volume = 0
        sounds = "Off"
    } else if (sounds === "Off") {
        clickSound.volume = 0.1
        sounds = "On"
        clickSound.currentTime = 0
        clickSound.play()
    }

    saveSettings()
}

function saveSettings() {
    localStorage.setItem("lighting", lighting)
    localStorage.setItem("sounds", sounds)
}

function loadSettings() {
    lighting = localStorage.getItem("lighting") || "Dark"
    sounds = localStorage.getItem("sounds") || "On"

    if (lighting === "Light") {
        document.body.classList.add("lightMode")
    } else if (lighting === "Dark") {
        document.body.classList.remove("lightMode")
    }

    if (sounds === "On") {
        clickSound.volume = 0.1
    } else if (sounds === "Off") {
        clickSound.volume = 0
    }
}

loadSettings()