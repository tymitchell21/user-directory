const form = document.querySelector('#userForm')

//Submits form and creates a new unordered list by calling other functions


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

//Builds list
function buildList(data) {
    const list = document.createElement('ul')

    const labels = Object.keys(data)
    labels.forEach(label => {
        const item = renderListItem(label, data[label])
        list.appendChild(item)
    })
    return list
}

//Submits form and creates a new unordered list by calling other function
const handleSubmit = function(ev) {
    ev.preventDefault()

    const f = ev.target
    const user = {
        userName: f.name.value,
        age: f.age.value,
        color: renderColor(f.favoriteColor.value),
    }

    const users = document.querySelector('#users')
    users.appendChild(buildList(user))

    ev.target.reset()
    ev.target.name.focus()

    //document.getElementById('newContent').style.backgroundColor = user[color]
    document.body.style.fontFamily = "Impact, Charcoal, sans-serif"
    //p.style.backgroundColor = color
    document.getElementById('girlfriend').style = "display: block"
}

form.addEventListener('submit', handleSubmit)