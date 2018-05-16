const form = document.querySelector('#userForm')

//Submits form and creates a new unordered list by calling other functions
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

//Creates a div, gives it a background color, height and width, and then returns it
function renderColor(color) {
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = color
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'

    return colorDiv
}

//Creates a list item, and puts text into it
function renderListItem(label, value, color) {
    const item = document.createElement('li')
    item.textContent = `${label}: `
    try {
        item.appendChild(value)
    } catch(e) {
        item.textContent += value
    }

    return item
}

//Creates an unordered list
function renderList(name, age, color) {
    const list = document.createElement('ul')
    list.appendChild(renderListItem('Name', name))
    list.appendChild(renderListItem('Age', age))
    list.appendChild(renderListItem('Favorite Color', renderColor(color)))
    
    return list
}