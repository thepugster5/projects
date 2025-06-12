/* Actual Variables */
let clicks = 0
let allTimeClicks = 0
let actualClicks = 0
let multiplier = 1
let prestigeCount = 0
let prestigeMult = 1
let prestigeBucks = 0
let multPrice = 25
let trueMultPrice = multPrice
let cpsMultiplier = 0
let cpsMultPrice = 50
let trueCpsMultPrice = 50

loadGame()

/* Elements */
const clickDisplay = document.getElementById("clickDisplay") // Total Clicks Display
const prestigeBucksDisplay = document.getElementById("prestigeBucksDisplay") // Prestige Bucks Display
const cpsDisplay = document.getElementById("cpsDisplay") // Clicks Per Second Display
const multDisplay = document.getElementById("multDisplay") // Multiplier Display
const mpcDisplay = document.getElementById("mpcDisplay") // Money Per Click Display
const prestigeDisplay = document.getElementById("prestigeDisplay") // Prestige Display
const multPriceDisplay = document.getElementById("multPriceDisplay") // Multiplier Price Display
const cpsPriceDisplay = document.getElementById("cpsPriceDisplay") // Clicks/sec Price Display

/* Stat Menu Elements */
const currentClicks = document.getElementById("currentClicks")
const totalClicks = document.getElementById("totalClicks")
const currentMultiplier = document.getElementById("currentMultiplier")
const totalPrestige = document.getElementById("totalPrestige")
const timePlayed = document.getElementById("timePlayed")
const currentCPS = document.getElementById("currentCPS")
const timesClicked = document.getElementById("timesClicked")

/* Sounds */
const clickSound = document.getElementById("clickSound")
clickSound.volume = 0.1

function addClick() {
    clicks += multiplier * prestigeMult
    allTimeClicks += multiplier * prestigeMult
    actualClicks += 1
    clickSound.currentTime = 0
    clickSound.play()
}

function autoClick() {
    clicks += cpsMultiplier * prestigeMult
    allTimeClicks += cpsMultiplier * prestigeMult
}

function buyMult() {
    if (clicks >= multPrice) {
        clicks -= multPrice
        multiplier += 1
        multPrice = parseInt((multPrice * 1.2))
        trueMultPrice = multPrice
        clickSound.currentTime = 0
        clickSound.play()
    } else {
        clickSound.currentTime = 0
        clickSound.play()
    }
}

function buyCPS() {
    if (clicks >= cpsMultPrice) {
        clicks -= cpsMultPrice
        cpsMultiplier += 1
        cpsMultPrice = parseInt((cpsMultPrice * 1.2))
        trueCpsMultPrice = cpsMultPrice
        clickSound.currentTime = 0
        clickSound.play()
    } else {
        clickSound.currentTime = 0
        clickSound.play()
    }
}

function updateGUI() {
    clickDisplay.innerText = Math.floor(clicks)
    prestigeBucksDisplay.innerText = Math.floor(prestigeBucks)
    cpsDisplay.innerText = `Clicks/sec: ${Math.floor(cpsMultiplier * prestigeMult)}`
    multDisplay.innerText = `| Multiplier: ${multiplier}`
    mpcDisplay.innerText = `| $/click: ${Math.floor(multiplier * prestigeMult)}`
    prestigeDisplay.innerText = `| Prestige Multiplier: ${prestigeMult.toFixed(1)}`
    multPriceDisplay.innerText = `Price: $${multPrice}`
    cpsPriceDisplay.innerText = `Price: $${cpsMultPrice}`
    
    multPrice = trueMultPrice
}

function updateStatGUI() {
    currentClicks.innerText = `Current Clicks: ${parseInt(clicks)}`
    totalClicks.innerText = `All Time Clicks: ${parseInt(allTimeClicks)}`
    currentMultiplier.innerText = `Current Multiplier: ${parseInt(multiplier)}`
    totalPrestige.innerText = `Prestiges: ${parseInt(prestigeCount)}`
    timePlayed.innerText = `Time Played: [NOT CODED]`
    currentCPS.innerText = `Current $/sec: ${Math.floor(cpsMultiplier * prestigeMult)}`
    timesClicked.innerText = `Times Clicked: ${parseInt(actualClicks)}`
}

function prestige() {
    if (clicks >= 100000) {
        prestigeBucks = parseInt(clicks / 10000) + prestigeBucks
        clicks = 0
        allTimeClicks = 0
        multiplier = 1
        cpsMultiplier = 0
        prestigeMult += 0.2
        multPrice = 25
        trueMultPrice = 25
        cpsMultPrice = 50
        trueCpsMultPrice = 50
        prestigeCount += 1
        clickSound.currentTime = 0
        clickSound.play()
    } else if (clicks < 10000) {
        alert(`You need 10000 Clicks to Prestige. (${parseInt(clicks)}/10000)`)
        clickSound.currentTime = 0
        clickSound.play()
    }
}

function factoryReset() {
    clicks = 0
    allTimeClicks = 0
    actualClicks = 0
    multiplier = 1
    cpsMultiplier = 0
    prestigeCount = 0
    prestigeMult = 1
    prestigeBucks = 0
    multPrice = 25
    trueMultPrice = 25
    cpsMultPrice = 50
    trueCpsMultPrice = 50
    resetAchievements()
    closeMenus()
    clickSound.currentTime = 0
    clickSound.play()
}

function toggleSettings() {
    document.body.classList.add("settings")
    document.body.classList.remove("reset")
    document.body.classList.remove("stats")
    document.body.classList.remove("achievements")
    clickSound.currentTime = 0
    clickSound.play()
}

function toggleReset() {
    document.body.classList.add("reset")
    document.body.classList.remove("settings")
    document.body.classList.remove("stats")
    document.body.classList.remove("achievements")
    clickSound.currentTime = 0
    clickSound.play()
}

function viewStats() {
    document.body.classList.add("stats")
    document.body.classList.remove("settings")
    document.body.classList.remove("reset")
    document.body.classList.remove("achievements")
    clickSound.currentTime = 0
    clickSound.play()
}

function viewAchievements() {
    document.body.classList.add("achievements")
    document.body.classList.remove("settings")
    document.body.classList.remove("reset")
    document.body.classList.remove("stats")
    clickSound.currentTime = 0
    clickSound.play()
}

function closeMenus() {
    document.body.classList.remove("settings")
    document.body.classList.remove("reset")
    document.body.classList.remove("stats")
    document.body.classList.remove("achievements")
}

function toggleLighting() {
    document.body.classList.toggle("darkMode")
    clickSound.currentTime = 0
    clickSound.play()
}

function toggleSound() {
    if (clickSound.volume === 0.1) {
        clickSound.volume = 0
    } else if (clickSound.volume === 0) {
        clickSound.volume = 0.1
        clickSound.currentTime = 0
        clickSound.play()
    }
}

function saveGame() {
    localStorage.setItem("clicks", clicks)
    localStorage.setItem("allTimeClicks", allTimeClicks)
    localStorage.setItem("actualClicks", actualClicks)
    localStorage.setItem("multiplier", multiplier)
    localStorage.setItem("cpsMultiplier", cpsMultiplier)
    localStorage.setItem("prestigeCount", prestigeCount)
    localStorage.setItem("prestigeMult", prestigeMult)
    localStorage.setItem("prestigeBucks", prestigeBucks)
    localStorage.setItem("multPrice", multPrice)
    localStorage.setItem("trueMultPrice", trueMultPrice)
    localStorage.setItem("cpsMultPrice", cpsMultPrice)
    localStorage.setItem("trueCpsMultPrice", trueCpsMultPrice)
}

function loadGame() {
    clicks = parseInt(localStorage.getItem("clicks")) || 0
    allTimeClicks = parseInt(localStorage.getItem("allTimeClicks")) || 0
    actualClicks = parseInt(localStorage.getItem("actualClicks")) || 0
    multiplier = parseInt(localStorage.getItem("multiplier")) || 1
    cpsMultiplier = parseInt(localStorage.getItem("cpsMultiplier")) || 0
    prestigeCount = parseInt(localStorage.getItem("prestigeCount")) || 0
    prestigeMult = parseFloat(localStorage.getItem("prestigeMult")) || 1
    prestigeBucks = parseInt(localStorage.getItem("prestigeBucks")) || 0
    multPrice = parseInt(localStorage.getItem("multPrice")) || 25
    trueMultPrice = parseInt(localStorage.getItem("trueMultPrice")) || 25
    cpsMultPrice = parseInt(localStorage.getItem("cpsMultPrice")) || 50
    trueCpsMultPrice = parseInt(localStorage.getItem("trueCpsMultPrice")) || 50
}


/* SetIntervals */
const guiUpdateInt = setInterval(updateGUI, 100)
const statGuiUpdateInt = setInterval(updateStatGUI, 100)
const saveGameInt = setInterval(saveGame, 100)
const autoClickInt = setInterval(autoClick, 1000)
