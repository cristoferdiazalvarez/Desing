const numbers = [32, 21, 63, 95, 100, 67, 43];

const number100 = numbers.find(number => number === 100);
console.log(number100);

const movies = [
    { title: 'Madagascar', stars: 4.5, date: 2015 },
    { title: 'Origen', stars: 5, date: 2010 },
    { title: 'Your Name', stars: 5, date: 2016 }
];

const movie2010 = movies.find(movie => movie.date === 2010);
console.log(movie2010);

const aliens = [
    { name: 'Zalamero', planet: 'Eden', age: 4029 },
    { name: 'Paktu', planet: 'Andromeda', age: 32 },
    { name: 'Cucushumushu', planet: 'Marte', age: 503021 }
];

const mutarions = [
    { name: 'Porompompero', description: "Hace que el alien pueda adquirir las habilidades de los humanos que se encuentra a su alrededor" },
    { name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna' },
    { name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer' }
];

const targetAlien = aliens.find(alien => alien.name === 'Cucushumushu');
const targetMutation = mutarions.find(mutation => mutation.name === 'Porompompero');

const mutatedAlien = { ...targetAlien, mutation: targetMutation.description };
console.log(mutatedAlien);

