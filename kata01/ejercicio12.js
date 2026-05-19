const duplicate = [pizza, pasta , pizza, lasagna, pasta, lasagna];
function removeDuplicates(param) {
    let uniqueElements = [];

    for (let i = 0; i < param.length; i++) {
        if (!uniqueElements.includes(param[i])) {
            uniqueElements.push(param[i]);
        }

        return uniqueElements;
    }
}

console.log(removeDuplicates(duplicate));