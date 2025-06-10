const teams = [
    {
        name: "Milan",
        points: 0,
        fouls: 0,
    },
    {
        name: "Inter",
        points: 0,
        fouls: 0,
    },
    {
        name: "Napoli",
        points: 0,
        fouls: 0,
    },
    {
        name: "Roma",
        points: 0,
        fouls: 0,
    },
];

const randomizer = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

teams.forEach((team) => {
    team.points = randomizer(0, 9);
    team.fouls = randomizer(0, 5);
});

console.log(teams);

const newTeams = teams.map((team) => {
    return {
        name: team.name,
        fouls: team.fouls,
    };
});

console.log(newTeams);
