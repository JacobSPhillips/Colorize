const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', colorize)
}

const paragraph = document.querySelector('p')
paragraph.addEventListener('click', colorize)

const heading = document.querySelector('h1')
heading.addEventListener('click', colorize)

function colorize() {
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}

paragraph.prepend('Click any of my words to change the color. ')