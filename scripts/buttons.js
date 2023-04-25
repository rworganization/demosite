const simpleClickBtn = document.getElementById('simple-click-btn');
const doubleClickBtn = document.getElementById('double-click-btn');
const rightClickBtn = document.getElementById('right-click-btn');

const simpleClickMsg = document.getElementById('simple-click-msg');
const doubleClickMsg = document.getElementById('double-click-msg');
const rightClickMsg = document.getElementById('right-click-msg');

simpleClickBtn.addEventListener('click', () => {
    simpleClickMsg.innerText = 'Le bouton clic simple a été cliqué.';
});

doubleClickBtn.addEventListener('dblclick', () => {
    doubleClickMsg.innerText = 'Le bouton double clic a été cliqué.';
});

rightClickBtn.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    rightClickMsg.innerText = 'Le bouton clic droit a été cliqué.';
});
