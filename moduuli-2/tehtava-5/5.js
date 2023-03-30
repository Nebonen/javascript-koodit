let numbers = [];

while (true) {
  let input = prompt("Enter a number:");
  if (input === null) {
    break;
  }
  let num = parseInt(input);

  if (numbers.includes(num)) {
    alert("The number " + num + " has already been given!");
    break;
  }
  numbers.push(num);
}

numbers.sort();

console.log(numbers);