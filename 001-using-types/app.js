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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Neo',
    age: 42,
    hobbies: ['Hacking', 'Kung-Fu'],
    role: Role.ADMIN
};
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log('is admin');
}
