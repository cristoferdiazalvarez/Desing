const numbers = [11, 22, 32, 42, 52];
function average(param) {
    let totalSum = 0;

    for (let i = 0; i < param.length; i++) {
        totalSum += param[i];
    }

    let result = totalSum / param.length;

    return result;
}
console.log(average(numbers));