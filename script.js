const users = [
    { id: 1, name: 'Anna', age: 21, active: true },
    { id: 2, name: 'Ben', age: 17, active: false },
    { id: 3, name: 'Clara', age: 30, active: true },
    { id: 4, name: 'Dima', age: 30, active: false },
];

const names = users.filter((user) => user.age >= 18).map((user) => user.name)

console.log(names);
