// explicit object type...
// const person: {
//     name: string
//     age: number
// } = {
const person = { // type inference (preferred)
    name: 'Neo',
    age: 42,
    hobbies: ['Hacking', 'Kung-Fu']
}

let favoriteActivities: string[]
favoriteActivities = ['Sports']

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}