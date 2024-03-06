

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
    team.points = Math.floor(Math.random(5) * 90);
    team.fouls = Math.floor(Math.random(100) * 500);
})
console.log(teams);

// const [team1,team2, team3, team4, team5, team6, team7] = teams

newTable = teams.map((team) => {
    const {name, fouls} = team;
    return { name, fouls };

});
console.log(newTable);

//original table

const nameElement = document.querySelector('.name')
const pointsElement = document.querySelector('.points')
const foulsElement = document.querySelector('.fouls')

teams.forEach(team => {
    const {name, points, fouls} = team
    nameElement.insertAdjacentHTML('beforeend',`<li>${name}</li>`)
    pointsElement.insertAdjacentHTML('beforeend',`<li>${points}</li>`)
    foulsElement.insertAdjacentHTML('beforeend',`<li>${fouls}</li>`)
});

///short table

const shortNameElement = document.querySelector('.short-name')
const shortFoulsElement = document.querySelector('.short-fouls')

teams.forEach(team => {
    const {name, points, fouls} = team
    shortNameElement.insertAdjacentHTML('beforeend',`<li>${name}</li>`)
    shortFoulsElement.insertAdjacentHTML('beforeend',`<li>${fouls}</li>`)
});