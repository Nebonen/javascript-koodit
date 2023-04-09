const target = document.getElementById('target');
const trigger = document.getElementById('trigger');

trigger.addEventListener('mouseover', function() {
    target.setAttribute('src', 'img/picA.jpg');
});

trigger.addEventListener('mouseout', function() {
    target.setAttribute('src', 'img/picB.jpg');
});