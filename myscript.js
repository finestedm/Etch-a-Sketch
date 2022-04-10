var hardcodedInput = 12;

const newArray = (hardcodedInput ** 2);
var currentColor = '';

// This part created an array of boxes - size depends on newArray value
for (i = 0; i < newArray; i++) {
    var div = document.createElement('div');
    div.setAttribute("id", "box-" + i);
    div.setAttribute("class", "box");
    div.setAttribute("style", `width: ${600 / hardcodedInput}px; height: ${600 / hardcodedInput}px`);
    container.appendChild(div);
}

const box = document.querySelectorAll('.box');
const color = document.querySelectorAll('#color-chooser button');
const reset = document.querySelector('#reset');


// This part colors the clicked box to the chosen color
box.forEach((box) => {
    box.addEventListener('mouseover', (e) => {
        e.target.style.background = currentColor;
    });
});

// This part assignes the clicked color as a current color as well as sets a background color of color-choosing buttons
color.forEach((color) => {
    color.addEventListener('click', (e) => {
        chosenColor = (e.target.innerHTML)
        currentColor = chosenColor;
        resetAllButtonsBackground();
        e.target.setAttribute('class', `pressed`);
        e.target.style.backgroundColor = `${currentColor}`;
    });
});

// This part clears background color off color-choosing buttons
function resetAllButtonsBackground() {
    color.forEach((color) => {
        color.setAttribute('class', 'unpressed')
        color.style.backgroundColor = ``;
    });
}

reset.addEventListener('mousedown', () => {
    resetEverything();
});

function resetEverything() {
    color.forEach((color) => {
        color.setAttribute('class', 'unpressed')
        color.style.backgroundColor = ``;
    });

    for (i = 0; i < newArray; i++) {
        currentBoxId = 'box-' + `${i}`;
        currentBox = document.getElementById(currentBoxId);
        currentBox.style.backgroundColor = ``;
    }
}