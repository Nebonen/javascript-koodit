function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

let rollResult;
let rolls = [];

do {
    rollResult = rollDice();
    rolls.push(rollResult);
} while (rollResult !== 6);

const list = document.createElement("ul");
for (const r of rolls) {
    const item = document.createElement("li");
    item.textContent = r;
    list.appendChild(item);
}
document.body.appendChild(list);