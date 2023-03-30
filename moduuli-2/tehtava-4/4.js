let numbers = [];

while (true) {
  let input = prompt("Enter a number (0 to stop): ");
  let num = parseInt(input);

  if (isNaN(num)) {
    alert("Invalid input. Please enter a number.");
    continue;
  }
  if (num === 0) {
    break;
  }
  numbers.push(num);
}

numbers.sort(function(a, b) {
  return b - a;
});

console.log("Sorted Numbers: " + numbers.join(", "));