const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
};

function showAlienProperties(param) {
    for (const key in param) {
       
        console.log(key + ': ' + param[key]);

    }
}    