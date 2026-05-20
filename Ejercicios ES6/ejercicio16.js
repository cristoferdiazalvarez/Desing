function rollDice(numCaras) {

    const resultado = Math.floor(Math.random() * numCaras) + 1;
  
  return resultado;
}

console.log('--- Simulando tiradas de dados ---');
console.log(`Tirada de un dado de 6 caras: ${rollDice(6)}`);
console.log(`Tirada de un dado de 20 caras: ${rollDice(20)}`);



