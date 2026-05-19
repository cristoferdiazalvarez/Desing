const character = { name: "Jack Sparrow", age: 10 };

let firsName = "Jon";
let lastName = "Snow";
let age = 24;

console.log(`Soy ${firsName} ${lastName} tengo ${age} años y me gustan los lobos.`);

const toy1 = {name: "Buss myYear",price: 19 };
const toy2 = {name: "Rallo mcking",price: 29 };

console.log(`El juguete ${toy1.name} cuesta ${toy1.price} euros y está disponible en los siguientes colores: ${toy1.colors.join(", ")}.`);
console.log(`El juguete ${toy2.name} cuesta ${toy2.price} euros y está disponible en los siguientes colores: ${toy2.colors.join(", ")}.`);

let globalBasePrime = 10000;
const car1 = { name: "BMW m&m", basePrice: 50000, finalPrice: 60000 };
const car2 = { name: "Chevrolet Corbina", basePrice: 70000, finalPrice: 80000 };

globalBasePrice = 25000;

car1.finalPrice = car1.basePrice + globalBasePrime;
car2.finalPrice = car2.basePrice + globalBasePrime;

console.log(`El precio final del coche ${car1.name} es ${car1.finalPrice} euros.`);
console.log(`El precio final del coche ${car2.name} es ${car2.finalPrice} euros.`);

