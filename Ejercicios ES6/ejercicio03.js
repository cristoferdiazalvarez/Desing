const ponitsList = [12, 23, 34, 45, 56, 67, 78, 89, 90];

const pointsListcopy = [...pointsList];

console.log(pointsListcopy);

const toy = {
    name: 'Bus laiyiar',
    date: '20-30-1995',
    colors: ['multicolor']
};

const toyCopy = { ...toy };

console.log(toyCopy);

const toydata = {
    name: 'Bus laiyiar',
    date: '20-30-1995',
    colors: ['multicolor']
};

const toyUpdate = { ...toydata,
    lights: 'rgb', poweer: ['Volar like a dragon', 'MoonWalk'] };

const finalToy = { ...toydata, ...toyUpdate 
};

console.log(finalToy);

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const colorsWithoutYellow = [...colors];
colors.slice(0, 2);
colors.slice(3);

console.log(`Colores originales: ${colors}`);
console.log(`Colores sin amarillo: ${colorsWithoutYellow}`);

