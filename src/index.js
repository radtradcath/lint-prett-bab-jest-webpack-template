import './style.css';

const body = document.querySelector('body')


function create() {
    const newDiv = document.createElement('div')
    body.appendChild(newDiv);
    newDiv.textContent = 'heuehuee'
}