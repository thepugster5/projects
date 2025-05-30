let coins = 0;
let multiplier = 1
let price = (multiplier * 20)

load()

function collect() {
    coins += multiplier;
}

function reset() {
    coins = 0;
    multiplier = 1;
    alert(`Your stats have been reset.`);
}

function double() {
    coins *= 2;
}

function halve() {
    coins /= 2;
}

function save() {
    localStorage.setItem("coins", coins);
    localStorage.setItem("multiplier", multiplier);
}

function load() {
    coins = parseInt(localStorage.getItem("coins") || 0);
    multiplier = parseInt(localStorage.getItem("multiplier") || 1);
}

function displayCoins() {
    if (coins < 0) coins = 0;
    if (multiplier <= 0) multiplier = 1;
    price = (multiplier * 20);
    document.getElementById(`coinDisplay`).textContent = coins;
    document.getElementById(`multDisplay`).textContent = (`Multiplier: ${multiplier}`);
    document.getElementById(`shopButton1`).textContent = (`+1 Multiplier (Costs $${price})`);
}

function buyMult1() {
    if (coins >= price) {
        coins -= price;
        multiplier += 1;
    }
}

function alertCoins() {
    alert(`You have ${coins} coins!`);
}

const coinLoop = setInterval(displayCoins, 100);
