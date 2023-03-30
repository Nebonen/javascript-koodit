const dog1 = prompt("Enter name of dog 1:");
const dog2 = prompt("Enter name of dog 2:");
const dog3 = prompt("Enter name of dog 3:");
const dog4 = prompt("Enter name of dog 4:");
const dog5 = prompt("Enter name of dog 5:");
const dog6 = prompt("Enter name of dog 6:");

const dogNames = [dog1, dog2, dog3, dog4, dog5, dog6];

dogNames.sort((a, b) => b.localeCompare(a));

const list = document.createElement("ul");
for (const name of dogNames) {
    const item = document.createElement("li");
    item.textContent = name;
    list.appendChild(item);
}
document.body.appendChild(list);