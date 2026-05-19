const mixedElements = [1, 'Rayo', 3, 'vallecano', 5, 'upgrande', 7];
function averageWord(param) {
        let totalSum = 0;
        for (let i = 0; i < param.length; i++) {
            const currentElement = param[i];

            if (typeof currentElement === 'number') {
                totalSum += currentElement;
            }
            else if (typeof currentElement === 'string') {
                totalSum += currentElement.length;
            }
        }
       let average = totalSum / param.length;
       return average;
}
console.log(averageWord(mixedElements));
    