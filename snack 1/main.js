const autoPark = [
{
    Marca: "Ford",
    Modello: "Fiesta",
    Alimentazione: "Diesel"
},
{
    Marca: "Kia",
    Modello: "Sportage",
    Alimentazione: "Benzina"
},
{
    Marca: "Fiat",
    Modello: "Panda",
    Alimentazione: "Metano"
},
{
    Marca: "Tesla",
    Modello: "Model S",
    Alimentazione: "Elettrico"
},
{
    Marca: "Ferrari",
    Modello: "458 Italia",
    Alimentazione: "Benzina"
},
{
    Marca: "Lamborghini",
    Modello: "Urus",
    Alimentazione: "Benzina"
},
{
    Marca: "Hyundai",
    Modello: "i10",
    Alimentazione: "Elettrico"
},
{
    Marca: "Nissan",
    Modello: "Juke",
    Alimentazione: "GPL"
},
{
    Marca: "Ford",
    Modello: "Puma",
    Alimentazione: "Diesel"
},
{
    Marca: "Porsche",
    Modello: "911 GTR",
    Alimentazione: "Benzina"
},
]

let dieselCars = []
let unleadedCars = []
let ecoCars = []

autoPark.forEach(car => {
    dieselCars = autoPark.filter((car) => car.Alimentazione === "Diesel")
    unleadedCars = autoPark.filter((car) => car.Alimentazione === "Benzina")
    ecoCars = autoPark.filter((car) => car.Alimentazione !== "Diesel "&& car.Alimentazione !== "Benzina" )
});

console.log(dieselCars);
console.log(unleadedCars);
console.log(ecoCars);