const users = [];

for (let i = 0; i < 30; i++) {
  users.push({
    name: `name${i + 1}`,
    surname: `surname${i + 1}`,
    age: 30 + i,
  });
}

console.log(users)

export { users }