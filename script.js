const btn = document.createElement('button');
btn.textContent = "Click me";

document.body.appendChild(btn);

const textBox = document.getElementById('name-input'); //init text box
let name = ''; //init name

btn.addEventListener('click', () => {
    name = textBox.value; //sets name to value in text box
    document.getElementById('header').textContent = "Hello, " + name + "!"; //grabs h1 by id and sets content to name value
});