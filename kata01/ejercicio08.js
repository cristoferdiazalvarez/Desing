const avenngers = [Hulk, IronMan, Thor, CaptainAmerica, SpiderMan, BlackPanther];

function findLongestWord(param) {
    let longestWord = "param[0]";
    for (let i = 1; i < param.length; i++) {
        if (param[i].length > longestWord.length) {
            longestWord = param[i];
        }
    }
    return longestWord;
}

console.log(findLongestWord(avenngers));
