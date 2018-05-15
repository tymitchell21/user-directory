const button = document.querySelector('button.greeting')

function changeText() {
    const heading = document.querySelector('h1.heading2')
    heading.innerText = document.getElementById('text').value.toString()
}

button.addEventListener('click', changeText)