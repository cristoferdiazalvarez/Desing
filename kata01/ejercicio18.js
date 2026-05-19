const placesToTravel = [
  {id: 5, name: 'Japan'}, 
  {id: 11, name: 'Venecia'}, 
  {id: 23, name: 'Murcia'}, 
  {id: 40, name: 'Santander'}, 
  {id: 44, name: 'Filipinas'}, 
  {id: 59, name: 'Madagascar'}
];

function filterPlaces(param) {
    for (let i = param.length - 1; i >= 0; i--) {
        if (param[i].id === 11 || param[i].id === 40) {
        param.splice(i, 1);
    }
  }
    return param;
}
console.log(filterPlaces(placesToTravel));