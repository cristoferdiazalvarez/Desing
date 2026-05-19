const nameFinder = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
function finderName(param, nameToFind) {
    for (let i = 0; i < param.length; i++) {
        if (param[i] === nameToFind) {
            return { found: true, position: i };
        }
    }
    return { found: false };
}

console.log(finderName(nameFinder,'Charlie'));
console.log(finderName(nameFinder , 'Zoe'));

