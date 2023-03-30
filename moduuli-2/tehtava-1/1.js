const numbers = [];

for (let i = 1; i <= 5; i++) {
    const num = prompt('Enter a number:');
    numbers.push(num)
}
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}