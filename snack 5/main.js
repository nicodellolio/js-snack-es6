
const bikes = [
    {
        name: "Pinarello Dogma F12",
        weight: 6.8
    },
    {
        name: "Specialized S-Works Tarmac SL7",
        weight: 6.7
    },
    {
        name: "BMC Teammachine SLR 01",
        weight: 6.6
    },
    {
        name: "Cervelo R5",
        weight: 6.3
    },
    {
        name: "Trek Emonda SLR9",
        weight: 5.2
    }
]
console.log(bikes);

const [bike1, bike2, bike3, bike4, bike5] = bikes

const lowerWeight = Math.min(...bikes.map(bike => bike.weight))

const lightestBikeArray = bikes.filter(bike => bike.weight <= lowerWeight)
const lightestBike = lightestBikeArray[0].name
console.log(`The lightest bike we can offer is the "${lightestBike}"
with a weight of ${lowerWeight}kg`);