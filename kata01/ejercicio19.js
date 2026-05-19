const toys = [
  {id: 5, name: 'Buzz MyYear'}, 
  {id: 11, name: 'Action Woman'}, 
  {id: 23, name: 'Barbie Man'}, 
  {id: 40, name: 'El gato con Guantes'},
  {id: 40, name: 'El gato felix'}
];

function filterToys(param) {
    for (let i = param.length - 1; i >= 0; i--) {
       if (param[i].name.includes('gato')) {
         param.splice(i, 1);
    }
  }
  return param;
}
console.log(filterToys(toys));
