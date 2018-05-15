const form = document.querySelector('#userForm')

const handleSubmit = function(ev) {
    ev.preventDefault()
    const users = document.querySelector('#users')
    const name = ev.target.name.value
    const age = ev.target.age.value
    const color = ev.target.favoriteColor.value

    const nameItem = document.createElement('li')
    nameItem.textContent = `Name: ${name}`

    const ageItem = document.createElement('li')
    ageItem.textContent = `Age: ${age}`

    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = color
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'

    const colorItem = document.createElement('li')
    colorItem.textContent = 'Favorite Color:'
    colorItem.appendChild(colorDiv)

    const list = document.createElement('ul')
    list.appendChild(nameItem)
    list.appendChild(ageItem)
    list.appendChild(colorItem)  

    users.appendChild(list)

    ev.target.reset()
    ev.target.name.focus()

    //document.body.style.backgroundColor = color
    document.body.style.fontFamily = "Impact, Charcoal, sans-serif"
    //p.style.backgroundColor = color
    document.getElementById('girlfriend').style = "display: block"
}

form.addEventListener('submit', handleSubmit)