

const teams = [
    {
        name: "Liverpool",
        points: 0,
        fouls: 0
    },
    {
        name: "Manchster City",
        points: 0,
        fouls: 0
    },
    {
        name: "Arsenal",
        points: 0,
        fouls: 0
    },
    {
        name: "Aston Villa",
        points: 0,
        fouls: 0
    },
    {
        name: "Tottenham",
        points: 0,
        fouls: 0
    },
    {
        name: "Manchester United",
        points: 0,
        fouls: 0
    },
    {
        name: "West Ham",
        points: 0,
        fouls: 0
    }
]

const valueAssignment = teams.map((team) => {
    team.points = Math.floor(Math.random(25) * 90);
    team.fouls = Math.floor(Math.random(100) * 500);
})
console.log(teams);

// const [team1,team2, team3, team4, team5, team6, team7] = teams

newTable = teams.map((team) => {
    const {name, fouls} = team;
    return { name, fouls };

});
console.log(newTable);


