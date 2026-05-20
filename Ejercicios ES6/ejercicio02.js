const game = {
    title: 'The last of us 2',
    gender: ['action', 'adventure', 'survival horror'],
    year: 1986
};

const { title, gender, year } = game;

console.log(title); 
console.log(gender);
console.log(year); 

const fruits = ['banana', 'apple', 'orange'];

const [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1); 
console.log(fruit2); 
console.log(fruit3);

const animalFunction = () => {
    return { name: 'Bengal Tiger', race: `Tiger` };
};

const { name, race } = animalFunction();

console.log(name); 
console.log(race);  

const car = {
    name: 'Mazda 6',
    itv: [2015, 2011, 2020]
};

const { name: carName, itv: [itv2015, itv2011, itv2020] } = car;

console.log(carName); 
console.log(itv2015); 
console.log(itv2011); 
console.log(itv2020);   

