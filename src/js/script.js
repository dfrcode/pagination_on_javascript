import "../css/style.css";

import { users } from "./json";

const countUsers = 3;

const container = document.querySelector(".container"),
  pagination = document.querySelector(".pagination");

const usersContainer = document.querySelector(".users");

const pages = [];

const len = users.length;

createPagination(countUsers)

starts(countUsers, users);

pages.forEach((page) => {
  page.addEventListener("click", () => {
    const pageNumber = +page.innerHTML;

    const start = (pageNumber - 1) * countUsers;
    const end = start + countUsers;

    const listUsers = users.slice(start, end);
    console.log(listUsers);

    removeUser();

    page.classList.add("active");

    for (let i = start; i < end; i++) {
      const { name, surname, age } = users[i];
      createUser(name, surname, age);
    }
  });
});

function createPagination(countUsers) {
  for (let i = 0; i < len; i++) {
    if (i % countUsers === 0) {
      const page = createEl("div", "number_page", pagination);
      pages.push(page);
    }

    pages.forEach((page, idx) => {
      page.textContent = idx + 1;
    });
  }
}

function starts(countUsers, users) {
  const listUsers = users.slice(0, countUsers);

  for (let i = 0; i < countUsers; i++) {
    const { name, surname, age } = users[i];
    createUser(name, surname, age);
  }

  pages.forEach((page, idx) => {
    if (idx === 0) {
      page.classList.add("active");
    }
  });
}

function removeUser() {
  usersContainer.textContent = "";

  pages.forEach((page) => {
    page.classList.remove("active");
  });
}

function createUser(nameText, surnameText, ageCount) {
  const user = createEl("div", "user", usersContainer),
    name = createEl("div", "name", user),
    surname = createEl("div", "surname", user),
    age = createEl("div", "age", user);

  name.textContent = nameText;
  surname.textContent = surnameText;
  age.textContent = ageCount;
}

function createEl(element, className, parent) {
  const el = document.createElement(element);
  el.classList.add(className);
  parent.appendChild(el);

  return el;
}