
let wordsMix = [
    "cane",
    "maccHina",
    "GATTO",
    "Palestra"
]

titleCase = wordsMix.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
});
console.log(titleCase);