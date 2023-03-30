const pariticpants = parseInt(prompt('How many pariticpants?'));
const names = [];

for (let i = 1; i <= pariticpants; i++) {
    const name = prompt('Give a name:');
    names.push(name)
}
names.sort();

const list = document.createElement("ol")
for (const name of names) {
    const li = document.createElement("li");
    li.textContent = name;
    list.appendChild(li);
}
document.body.appendChild(list);