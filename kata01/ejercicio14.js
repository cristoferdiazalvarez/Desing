const counterWords = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'];
function repeatCounter(param) {
    let count = {};

    for (let i = 0; i < param.length; i++) {
        const word = param[i];
        if (count[word] !== undefined) {
            count[word]++;
        } else {
            count[word] = 1;
        }
    }

    return count;
}

console.log(repeatCounter(counterWords));