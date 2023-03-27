const diceAmount = prompt('How many times to roll dice?');
let throws = 0;
let sum = 0;

while (throws < diceAmount) {
    const number = Math.floor(Math.random() * 6) + 1;
    sum += number;
    throws++;
}
document.querySelector('#target').innerHTML = 'Sum of the dice is ' + sum;