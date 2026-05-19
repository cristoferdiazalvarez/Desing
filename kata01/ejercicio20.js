const popularToys = [];
const toys = [
  {id: 5, name: 'Buzz MyYear', sellCount: 10}, 
  {id: 11, name: 'Action Woman', sellCount: 24}, 
  {id: 23, name: 'Barbie Man', sellCount: 15}, 
  {id: 40, name: 'El gato con Guantes', sellCount: 8},
  {id: 40, name: 'El gato felix', sellCount: 35}
];

function findPopularToys(toysArray, popularArray) {
    for (const toy of toysArray) {
       if (toy.sellCount > 15) {
         popularArray.push(toy);
    }
  }
}
findPopularToys(toys, popularToys);

console.log(popularToys);
