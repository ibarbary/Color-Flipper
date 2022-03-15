let container = document.querySelector('#container');
let button = document.querySelector('button');
button.addEventListener("click", changeColor);

function changeColor()
{
    let randomColor = "#" + Math.floor(Math.random() * 19777215).toString(16);
    container.style.background = randomColor;
    button.textContent = `Color : ${randomColor}`;
}