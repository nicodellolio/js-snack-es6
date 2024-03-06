const animals = [
    {
        nome: "Rana",
        famiglia: "Ranidae",
        classe: "Anfibi"
    },
    {
        nome: "Piccione",
        famiglia: "Columbidae",
        classe: "Volatili"
    },
    {
        nome: "Passero",
        famiglia: "Passeridae",
        classe: "Volatili"
    },
    {
        nome: "Gatto",
        famiglia: "Felidae",
        classe: "Mammiferi"
    },
    {
        nome: "Papera",
        famiglia: "Anatidi",
        classe: "Volatili"
    },
    {
        nome: "Canguro",
        famiglia: "Macropodidae",
        classe: "Mammiferi"
    },
    {
        nome: "Megattera",
        famiglia: "Balaenopteridae",
        classe: "Mammiferi"
    }
]
console.log(animals);

const mammaliaList = animals.filter(animal => animal.classe === "Mammiferi")
console.log(mammaliaList);