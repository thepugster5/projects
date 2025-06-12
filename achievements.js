/* Achievements */
let ownClicksI = "Not Owned"
let ownClicksII = "Not Owned"
let ownUpgradesI = "Not Owned"
let ownUpgradesII = "Not Owned"
let ownPrestigeI = "Not Owned"

/* Achievements Menu Elements */
const clicksI = document.getElementById("clicksI")
const clicksII = document.getElementById("clicksII")
const upgradesI = document.getElementById("upgradesI")
const upgradesII = document.getElementById("upgradesII")
const prestigeI = document.getElementById("prestigeI")

/* Achievement GUI Update Function */
function updateAchievementGUI() {
    clicksI.innerText = `Click 100 Times: ${ownClicksI}`
    clicksII.innerText = `Gain 500 Clicks: ${ownClicksII}`
    upgradesI.innerText = `Buy 1 Upgrade: ${ownUpgradesI}`
    upgradesII.innerText = `Buy 10 Upgrades: ${ownUpgradesII}`
    prestigeI.innerText = `Prestige Once: ${ownPrestigeI}`
}

// loadAchievements()

/* Loop to Change the GUI */
const achievementsGuiUpdateInt = setInterval(updateAchievementGUI, 100)

/* Function to Save Achievements */
function saveAchievements() {
    localStorage.setItem("ownClicksI", ownClicksI)
    localStorage.setItem("ownClicks2", ownClicksII)
    localStorage.setItem("ownUpgradesI", ownUpgradesI)
    localStorage.setItem("ownUpgradesII", ownUpgradesII)
    localStorage.setItem("ownPrestigeI", ownPrestigeI)
}

/* Function to Load Achievements */
function loadAchievements() {
    localStorage.getItem("ownClicksI") || "Not Owned"
    localStorage.getItem("ownClicks2") || "Not Owned"
    localStorage.getItem("ownUpgradesI") || "Not Owned"
    localStorage.getItem("ownUpgradesII") || "Not Owned"
    localStorage.getItem("ownPrestigeI") || "Not Owned"
}

/* Function to Reset Achievements (For Factory Resets) */
function resetAchievements() {
    ownClicksI = "Not Owned"
    ownClicksII = "Not Owned"
    ownUpgradesI = "Not Owned"
    ownUpgradesII = "Not Owned"
    ownPrestigeI = "Not Owned"
}

/* Check-Achievement Loops */
const clicks1Int = setInterval(checkClicksI, 100)
const clicks2Int = setInterval(checkClicksII, 100)
const upgrades1Int = setInterval(checkUpgradesI, 100)
const upgrades2Int = setInterval(checkUpgradesII, 100)
const prestige1Int = setInterval(checkPrestigeI, 100)




// Checks the Clicks I Achievement
function checkClicksI() {
    if (actualClicks >= 100) {
        ownClicksI = "Owned"
        clearInterval(clicks1Int)
    }
}

// Checks the Clicks II Achievement
function checkClicksII() {
    if (allTimeClicks >= 500) {
        ownClicksI = "Owned"
        clearInterval(clicks2Int)
    }
}

// Checks the Upgrades I Achievement
function checkUpgradesI() {
    if (multiplier >= 2) {
        ownUpgradesI = "Owned"
        clearInterval(upgrades1Int)
    }
}

// Checks the Upgrades II Achievement
function checkUpgradesII() {
    if (multiplier >= 10) {
        ownUpgradesII = "Owned"
        clearInterval(upgrades2Int)
    }
}

// Checks the Prestige I Achievement
function checkPrestigeI() {
    if (prestigeCount >= 1) {
        ownPrestigeI = "Owned"
        clearInterval(prestige1Int)
    }
}