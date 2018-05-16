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

    const term = document.createElement('dt')
    term.textContent = label

    const description = document.createElement('dd')

    try {
        description.appendChild(value)
    } catch(e) {
        description.textContent += value
    }

    item.appendChild(term)
    item.appendChild(description)
    return item
}

//Builds list
function buildList(data) {
    const list = document.createElement('dl')

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
        favoriteColor: renderColor(f.favoriteColor.value),
    }

    const users = document.querySelector('#users')
    users.appendChild(buildList(user))

    ev.target.reset()
    ev.target.name.focus()

    document.getElementById('newContent').style = "display: block"
}

form.addEventListener('submit', handleSubmit)