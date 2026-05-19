cont numbers = [1, 2, 3, 4, 5, 20, 35, 100];

function sumAll(param) {
    let totalSum = 0;

    for (let i = 0; i < param.length; i++) {
        totalSum = totalSum + param[i];
    }

    return totalSum;
}

console.log(sumAll(numbers));