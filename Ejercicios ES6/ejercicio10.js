const videogames = [
    { name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5 },
    { name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5 },
    { name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8 },
    { name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5 },
    { name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5 },
    { name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10 },
];

const rpgGames = videogames.filter(game => game.genders.includes('RPG'));

console.log(rpgGames.map(game => game.name));

const averageRpgScore = rpgGames.reduce((accumulator, game) => {
    return accumulator + game.score;
}, 0) / rpgGames.length;

console.log("Puntuación media de los juegos RPG:", averageRpgScore);
