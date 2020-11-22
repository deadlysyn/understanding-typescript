// explicit object type...
// not needed when all types can be infered
// const person: {
//     name: string
//     age: number
// } = {
const person: {
    name: string
    age: number
    hobbies: string[]
    role: [number, string] // tuple
} = { // type inference (preferred)
    name: 'Neo',
    age: 42,
    hobbies: ['Hacking', 'Kung-Fu'],
    role: [2, 'author']
}

// for generic array type...
// person.role.push('admin') // would work even if bad, including with tuple!
// person.role[1] = 10 // prevented by tuple
// person.role = [0, 'admin', 'user'] // prevented by tuple

let favoriteActivities: string[]
favoriteActivities = ['Sports']

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}