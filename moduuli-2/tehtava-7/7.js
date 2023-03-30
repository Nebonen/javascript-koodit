function rollDice(numSides) {
    return Math.floor(Math.random() * numSides) + 1;
}

const numSides = parseInt(prompt("Enter the number of sides on the dice:"));
let rollResult;
let rolls = [];

do {
    rollResult = rollDice(numSides);
    rolls.push(rollResult);
} while (rollResult !== numSides);

const list = document.createElement("ul");
for (const r of rolls) {
    const item = document.createElement("li");
    item.textContent = r;
    list.appendChild(item);
}
document.body.appendChild(list);