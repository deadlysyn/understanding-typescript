// explicit object type...
// const person: {
//     name: string
//     age: number
// } = {
const person = { // type inference (preferred)
    name: 'Neo',
    age: 100
}

console.log(person.name)
