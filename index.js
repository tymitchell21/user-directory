const button = document.querySelector('button.greeting')

function changeText(ev) {
    const heading = document.querySelector('h1.heading2')
    heading.innerText = "I am a G"
}

button.addEventListener('click', changeText)