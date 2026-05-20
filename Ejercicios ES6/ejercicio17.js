const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
  ];

  function swap(array, index1, index2) {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  }

  return array;

    swap(fantasticFour, 0, 1);
    console.log(fantasticFour);

    console.log('--- Simulando tiradas de dados ---');
    console.log(`Tirada de un dado de 6 caras: ${rollDice(6)}`);
    console.log(`Tirada de un dado de 20 caras: ${rollDice(20)}`);
    