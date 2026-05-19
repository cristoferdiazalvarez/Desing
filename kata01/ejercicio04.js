const avengers1 = [ Hulk, IronMan, Thor, CaptainAmerica, BlackWidow, Hawkeye ];

console.log(avengers1[0]);
console.log(avengers1[1]);
console.log(avengers1[2]);
console.log(avengers1[3]);
console.log(avengers1[4]);
console.log(avengers1[5]);

const avengers2 = [ Hulk, IronMan, Thor, CaptainAmerica ];
avengers2[0] = Hulk;
avengers2[1] = IronMan;

console.log(avengers2[0]);
console.log(avengers2[1]);
console.log(avengers2[2]);
console.log(avengers2[3]);  

const avengers3 = [ Hulk, IronMan, Thor, CaptainAmerica ];
avengers3[0] = Hulk;
avengers3[1] = IronMan;
avengers3[2] = Thor;
avengers3[3] = CaptainAmerica;

console.log(avengers3[0]);
console.log(avengers3[1]);
console.log(avengers3[2]);
console.log(avengers3[3]);

const rickAndMortyCharacters1 = [ Rick, Morty, Summer, Beth, Jerry ];
rickAndMortyCharacters1.push("Morty","Summer");
console.log(rickAndMortyCharacters1[0]);
console.log(rickAndMortyCharacters1[1]);
console.log(rickAndMortyCharacters1[2]);
console.log(rickAndMortyCharacters1[3]);
console.log(rickAndMortyCharacters1[4]);

const rickAndMortyCharacters2 = [ Rick, Morty, Summer, Beth, Jerry ];
rickAndMortyCharacters2.pop();
console.log(rickAndMortyCharacters2[0]);
console.log(rickAndMortyCharacters2[1]);
console.log(rickAndMortyCharacters2[2]);
console.log(rickAndMortyCharacters2[3]);
console.log(rickAndMortyCharacters2[4]);

const rickAndMortyCharacters3 = [ Rick, Morty, Summer, Beth, Jerry ];
rickAndMortyCharacters3.splice(1, 1);
console.log(rickAndMortyCharacters3[0]);
console.log(rickAndMortyCharacters3[1]);
console.log(rickAndMortyCharacters3[2]);
console.log(rickAndMortyCharacters3[3]);
console.log(rickAndMortyCharacters3[4]);


