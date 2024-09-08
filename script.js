let clickCount = 0;

function countClicks() {
    clickCount++;
    console.log(clickCount);
    let button = document.getElementById('btn1');
    button.textContent = 'Klicks: ' + clickCount;
}

function addNewButton() {
    let newButton = document.createElement('button');
    newButton.id = 'btn1';
    newButton.textContent = 'Klicke mich!';
    newButton.onclick = countClicks;
    let buttonContainer = document.getElementById('buttonContainer');
    buttonContainer.appendChild(newButton);
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('addButton');
    const tooltipText = document.querySelector('.tooltiptext');

    button.addEventListener('click', () => {
        tooltipText.style.visibility = tooltipText.style.visibility === 'visible' ? 'hidden' : 'visible';
        tooltipText.style.opacity = tooltipText.style.opacity === '1' ? '0' : '1';
    });
});
