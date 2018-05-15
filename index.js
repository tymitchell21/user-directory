const form = document.querySelector('#userForm')

const handleSubmit = function(ev) {
    ev.preventDefault()
    const heading = document.querySelector('#font')
    const userName = ev.target.userName.value
    heading.textContent = userName

    document.body.style.backgroundColor = "red"
    document.body.style.fontFamily = "Impact, Charcoal, sans-serif"
    document.getElementById('girlfriend').style = "display: block"
}

form.addEventListener('submit', handleSubmit)