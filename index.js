const form = document.querySelector('#userForm')

const handleSubmit = function(ev) {
    ev.preventDefault()
    const users = document.querySelector('#users')
    const name = ev.target.name.value
    const age = ev.target.age.value

    const p = document.createElement('p');
    p.textContent = `${name}, ${age}`

    users.appendChild(p)

    ev.target.reset()
    ev.target.name.focus()

    document.body.style.backgroundColor = "red"
    document.body.style.fontFamily = "Impact, Charcoal, sans-serif"
    document.getElementById('girlfriend').style = "display: block"
}

form.addEventListener('submit', handleSubmit)