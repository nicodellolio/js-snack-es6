
let randomPoints = Math.floor(Math.random(25) * 90);
let randomFouls = Math.floor(Math.random(100) * 500);

const teams = [
    {
        name: "Liverpool",
        points: randomPoints,
        fouls: randomFouls
    },
    {
        name: "Manchster City",
        points: randomPoints,
        fouls: randomFouls
    },
    {
        name: "Arsenal",
        points: randomPoints,
        fouls: randomFouls
    },
    {
        name: "Aston Villa",
        points: randomPoints,
        fouls: randomFouls
    },
    {
        name: "Tottenham",
        points: randomPoints,
        fouls: randomFouls
    },
    {
        name: "Manchester United",
        points: randomPoints,
        fouls: randomFouls
    },
    {
        name: "West Ham",
        points: randomPoints,
        fouls: randomFouls
    }
]

const [team1,team2, team3, team4, team5, team6, team7] = teams
console.log(teams);


function myFunction (...severalTeams){
    const {name, fouls} = severalTeams
    console.log(name, fouls);
}
myFunction(team1,team2, team3, team4, team5, team6, team7)

// teams.forEach(team => {
//     newTable.push(team)
// });
// console.log(newTable);
    
