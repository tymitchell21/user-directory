const form = document.querySelector('#userForm')

const handleSubmit = function(ev) {
    ev.preventDefault()
    const users = document.querySelector('#users')
    const name = ev.target.name.value
    const age = ev.target.age.value
    const color = ev.target.favoriteColor.value

    users.appendChild(renderList(name, age, color))
    users.style.float = "center"

    ev.target.reset()
    ev.target.name.focus()

    document.getElementById('newContent').style.backgroundColor = color
    document.body.style.fontFamily = "Impact, Charcoal, sans-serif"
    //p.style.backgroundColor = color
    document.getElementById('girlfriend').style = "display: block"
}

form.addEventListener('submit', handleSubmit)

function renderColor(color) {
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = color
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'

    return colorDiv
}

function renderListItem(text, color) {
    const item = document.createElement('li')
    item.textContent = text
    if (color){
        item.appendChild(renderColor(color))
    }

    return item
}

function renderList(name, age, color) {
    const list = document.createElement('ul')
    list.appendChild(renderListItem(`Name: ${name}`, null))
    list.appendChild(renderListItem(`Age: ${age}`, null))
    list.appendChild(renderListItem('Favorite Color', color))
    
    return list
}