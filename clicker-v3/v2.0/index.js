/* Variable Declaration */
let clicks = 0 // Click Currency
let allTimeClicks = 0 // All Time Clicks (for stats)
let autoclicks = 0 // CPS
const display = document.getElementById("clickDisplay") // Click Display
const cpsDisplay = document.getElementById("cpsDisplay") // Clicks Per Second Display
const randomColorButton = document.getElementById("randomColorButton") // Random Color Button
const quackButton = document.getElementById("quackButton") // Quack Button
const toggleLightingButton = document.getElementById("toggleLightingButton") // Light/Dark Mode Button
const clickSound = document.getElementById("clickSound") // Click Sound Effect
const quackSound1 = document.getElementById("quackSound1") // Quack Sound Effect #1
const quackSound2 = document.getElementById("quackSound2") // Quack Sound Effect #2
const quackSound3 = document.getElementById("quackSound3") // Quack Sound Effect #3
clickSound.volume = 0.2 // Click SFX Volume

load()

/* Button Functions */
function addClick() { // Clicker Button
    clicks += 1
    allTimeClicks += 1
    clickSound.currentTime = 0
    clickSound.play()
}

function shop1() {
    if (clicks >= 25) {
        clicks -= 25
        autoclicks += 1
    }
}

function resetStats() { // Reset Everything
    clicks = 0
    allTimeClicks = 0
    autoclicks = 0
}

/* Fun */

function randomColor() { // Random Color
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

function quack() { // Plays A Random Quack Sound
    const chosenQuack = Math.floor(Math.random() * 3)

    if (chosenQuack === 0) {
        quackSound1.currentTime = 0
        quackSound1.play()
    } else if (chosenQuack === 1) {
        quackSound2.currentTime = 0
        quackSound2.play()
    } else if (chosenQuack === 2) {
        quackSound3.currentTime = 0
        quackSound3.play()
    }
}

function toggleLighting() {
    document.body.classList.toggle("darkMode")
}

/* "Framework" */
function save() { // Automatically save stats
    localStorage.setItem("clicks", clicks)
    localStorage.setItem("allTimeClicks", allTimeClicks)
    localStorage.setItem("autoclicks", autoclicks)    
}

function load() { // Automatically load stats
    clicks = parseInt(localStorage.getItem("clicks")) || 0
    allTimeClicks = parseInt(localStorage.getItem("allTimeClicks")) || 0
    autoclicks = parseInt(localStorage.getItem("autoclicks")) || 0
}

function autoClick() { // Autoclick Function
    clicks += autoclicks
    allTimeClicks += autoclicks
}

function showClicks() { // Click Display
    display.innerText = clicks
}

function showCPS() { // CPS Display
    cpsDisplay.innerText = `Clicks Per Second: ${autoclicks}`
}

function checkFun() { // Checks if you have 1000 clicks and unlocks the fun section
    if (allTimeClicks >= 1000) {
        alert("You unlocked the fun section!")
        randomColorButton.disabled = false 
        quackButton.disabled = false
        toggleLightingButton.disabled = false
        clearInterval(checkFunInt)
    }
}

const saveInt = setInterval(save, 100)
const clickDisplayInt = setInterval(showClicks, 100)
const cpsDisplayInt = setInterval(showCPS, 100)
const autoClickInt = setInterval(autoClick, 1000)
const checkFunInt = setInterval(checkFun, 100)