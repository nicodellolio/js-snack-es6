
const people = [
    {
        name: "Anna",
        lastname: "Facchetti",
        age: 80
    },
    {
        name: "Michele",
        lastname: "Zanetti",
        age: 50
    },
    {
        name: "Julio",
        lastname: "Vannaria",
        age: 14
    },
    {
        name: "Lorena",
        lastname: "Meazza",
        age: 69
    },
    {
        name: "Luigi",
        lastname: "Milito",
        age: 17
    },
    {
        name: "Luis",
        lastname: "Nazario da Lima",
        age: 18
    },
    {
        name: "Chrisian 'Bobo'",
        lastname: "Vieri",
        age: 15
    }
]
console.log(people);

indication = [ ]
const canDrive = ` is entitled to drive`
const cannotDrive = ` is not allowed to drive`

people.forEach(person => {
    console.log(person);
    if (person.age >= 18) {
        indication.push(person.name + ' ' + person.lastname + canDrive)
    } else {
        indication.push(person.name + ' ' + person.lastname + cannotDrive)
    }
});
console.log(indication);