const button = document.querySelector('button.greeting')

function changeText() {
    const heading = document.querySelector('h1.heading2')
    heading.innerText = document.getElementById('text').value
    document.body.style.backgroundColor = "red"
    document.body.style.fontFamily = "Impact, Charcoal, sans-serif"
    document.getElementById('girlfriend').style = "display: block"
}

button.addEventListener('click', changeText)