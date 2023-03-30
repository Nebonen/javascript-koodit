function concat(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    return result;
}

const arr = ["Johnny", "DeeDee", "Joey", "Marky"];
const result = concat(arr);
document.querySelector('#target').innerHTML = result;