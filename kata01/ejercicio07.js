function getMaxNumber(numberOne, numberTwo) {
    if (numberOne > numberTwo) {
        return numberOne;
    } else {
        return numberTwo;
    }
}

console.log(getMaxNumber(5, 10)); // Output: 10
console.log(getMaxNumber(-3, 2)); // Output: 2
console.log(getMaxNumber(7, 7)); // Output: 7

