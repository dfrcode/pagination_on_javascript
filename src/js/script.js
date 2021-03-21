import '../css/style.css'

import { users } from './json'

const container = document.querySelector('.container'),
pages = document.querySelectorAll('.number_page')

const countUsers = 3

pages.forEach(page => {
    page.addEventListener('click', () => {

        const pageNumber = +page.innerHTML

        const start = (pageNumber - 1) * countUsers
        const end = start + countUsers

        const listUsers = users.slice(start, end)
        console.log(listUsers)

        removeUser()

        for (let i = start; i < end; i++) {
            const { name, surname, age } = users[i]
            createUser(name, surname, age)
        }
        
    })
})

const usersContainer = document.querySelector('.users')

function removeUser() {
    usersContainer.textContent = ''
}

function createUser(nameText, surnameText, ageCount) {
    const user = createEl('div', 'user', usersContainer),
    name = createEl('div', 'name', user),
    surname = createEl('div', 'surname', user),
    age = createEl('div', 'age', user)

    name.textContent = nameText
    surname.textContent = surnameText
    age.textContent = ageCount
}

function createEl(element, className, parent) {

    const el = document.createElement(element)
    el.classList.add(className)
    parent.appendChild(el)

    return el
}