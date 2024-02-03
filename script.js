const button = document.querySelector("button");
const container = document.querySelector(".container");
const color = ['red', 'blue', 'green', 'yellow', 'purple', 'voilet', 'indigo', 'maroon', 'beize', 'orange', 'pink', '#fff'];

container.style.backgroundColor = 'red'

button.addEventListener('click', colorB)


function colorB() {
    const colorIndex = parseInt(Math.floor(Math.random() * color.length))
    container.style.backgroundColor = color[colorIndex]
}