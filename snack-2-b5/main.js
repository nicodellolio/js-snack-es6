const zucchini = [
    {
        variety: "Costata Romanesco",
        weight: 200,
        length: 12
    },
    {
        variety: "Dark Green",
        weight: 250,
        length: 22
    },
    {
        variety: "Golden Zucchini",
        weight: 220,
        length: 11
    },
    {
        variety: "Costata Striata",
        weight: 285,
        length: 12
    },
    {
        variety: "Ronde de Nice",
        weight: 280,
        length: 16
    },
    {
        variety: "Eight Ball",
        weight: 280,
        length: 25
    },
    {
        variety: "Trombetta",
        weight: 300,
        length: 26
    },
    {
        variety: "Zucchini Blossoms",
        weight: 500,
        length: 30
    },
    {
        variety: "Elite",
        weight: 100,
        length: 8
    },
    {
        variety: "Cocozelle",
        weight: 1200,
        length: 35
    }
]

// short zucchini
shortWeight = 0

const short = zucchini.filter(zucchina => zucchina.length <= 15)
console.log(short);
short.forEach(zucchina => shortWeight += zucchina.weight );
console.log(shortWeight);

//long zucchini
longWeight =  0

const long = zucchini.filter(zucchina => zucchina.length > 15)
console.log(long);
long.forEach(zucchina => longWeight += zucchina.weight );
console.log(longWeight);

