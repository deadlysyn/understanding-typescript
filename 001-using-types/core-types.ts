// explicit object type...
// not needed when all types can be infered
// const person: {
//     name: string
//     age: number
// } = {
// const person: {
//     name: string
//     age: number
//     hobbies: string[]
//     role: [number, string] // tuple
// } = { // type inference (preferred)
//     name: 'Neo',
//     age: 42,
//     hobbies: ['Hacking', 'Kung-Fu'],
//     role: [2, 'author']
// }

// for generic array type...
// person.role.push('admin') // would work even if bad, including with tuple!
// person.role[1] = 10 // prevented by tuple
// person.role = [0, 'admin', 'user'] // prevented by tuple


// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2

// numbering starts at 0
enum Role { ADMIN, READ_ONLY, AUTHOR }
// start at specified number
// enum Role { ADMIN = 5, READ_ONLY, AUTHOR }
// specify all
// enum Role { ADMIN = 5, READ_ONLY = 10, AUTHOR = 20 }
// mixed types...
// enum Role { ADMIN = 5, READ_ONLY = 'FOO', AUTHOR = 20 }

const person = {
    name: 'Neo',
    age: 42,
    hobbies: ['Hacking', 'Kung-Fu'],
    role: Role.ADMIN
}

let favoriteActivities: string[]
favoriteActivities = ['Sports']

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

if (person.role === Role.ADMIN) {
    console.log('is admin')
}