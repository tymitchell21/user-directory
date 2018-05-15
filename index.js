const form = document.querySelector('#userForm')

const handleSubmit = function(ev) {
    ev.preventDefault()
    const users = document.querySelector('#users')
    const userName = ev.target.userName.value
    users.textContent += ' ' + userName
    ev.target.userName.value = ''

    document.body.style.backgroundColor = "red"
    document.body.style.fontFamily = "Impact, Charcoal, sans-serif"
    document.getElementById('girlfriend').style = "display: block"
}

form.addEventListener('submit', handleSubmit)