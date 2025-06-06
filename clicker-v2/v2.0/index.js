/* IDEAS
- Clicker Upgrades
- Achievements
- Stats
- Prestige
*/

let coins = 0;
let multiplier = 1;
let multPrice = (multiplier * 20);
let cps = 0;
let cpsSpeed = 1000;
let clickerPrice = 10;
let clickerSpeedPrice = 100;

load();

function collect() {
    coins += multiplier;
    save();
}

function reset() {
    coins = 0;
    multiplier = 1;
    cps = 0;
    cpsSpeed = 1000;
    alert(`Your stats have been reset.`);
    save();
    window.location.reload();
}

function save() {
    localStorage.setItem("coins", coins);
    localStorage.setItem("multiplier", multiplier);
    localStorage.setItem("cps", cps);
    localStorage.setItem("cpsSpeed", cpsSpeed);
}

function load() {
    coins = parseInt(localStorage.getItem("coins") || 0);
    multiplier = parseInt(localStorage.getItem("multiplier") || 1);
    cps = parseInt(localStorage.getItem("cps") || 0);
    cpsSpeed = parseInt(localStorage.getItem("cpsSpeed") || 1000);
}

function displayCoins() {
    if (coins < 0) coins = 0;
    if (multiplier <= 0) multiplier = 1;
    multPrice = (multiplier * 20);
    if (cps < 0) cps = 0;
    clickerPrice = Math.floor(10 * (1.5 ** cps))
    if (cpsSpeed > 1000) cpsSpeed = 1000;
    document.getElementById(`coinDisplay`).textContent = coins;
    document.getElementById(`multDisplay`).textContent = (`Multiplier: ${multiplier}`);
    document.getElementById(`shopButton1`).textContent = (`+1 Multiplier (Costs $${multPrice})`);
    document.getElementById(`clickerDisplay`).textContent = (`Clicks/sec: ${cps}`)
    document.getElementById(`shopButton2`).textContent = (`+10 Clicks/sec (Costs $${clickerPrice})`);
}

function buyMult1() {
    if (coins >= multPrice) {
        coins -= multPrice;
        multiplier += 1;
        save();
    }
}

function buyCPS1() {
    if (coins >= clickerPrice) {
        coins -= clickerPrice;
        cps += 1;
        save();
    }
}

function buyCPS2() {
    if (coins >= clickerSpeedPrice) {
        if (cpsSpeed > 200) {
            coins -= clickerSpeedPrice;
            clickerSpeedPrice = (clickerSpeedPrice * 2)
            cpsSpeed -= 200;
            clearInterval(autoClickLoop)
            autoClickLoop = setInterval(autoClick, cpsSpeed)
            save();
        } else if (cpsSpeed === 200) {
            // Does literally nothing, just added to prevent hiccups.
        }
    }
}

function autoClick() {
    coins += cps;
    save();
}

const autoClickLoop = setInterval(autoClick, cpsSpeed)

const coinLoop = setInterval(displayCoins, 100);
