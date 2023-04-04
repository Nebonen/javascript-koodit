const array1 = ['First item', 'Second item', 'Third item'];

const list = document.getElementById('target');
for (const a of array1) {
    const item = document.createElement('li');
    item.textContent = a;
    list.appendChild(item);
}
document.body.appendChild(list)