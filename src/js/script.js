import "../css/style.css";

import { users } from "./json";

import { createPagination, starts, removeUser, createUser, pages } from "./functions";

const countUsers = 10;

createPagination(countUsers);

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
