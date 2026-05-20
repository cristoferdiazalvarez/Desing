const users1 = [
    { Id: 1, Name: "Alice", Age: 30 },
    { Id: 2, Name: "Bob", Age: 25 },
    { Id: 3, Name: "Charlie", Age: 35 }
];

const userNames = users1.map(user => user.Name);

console.log(userNames); // Output: ["Alice", "Bob", "Charlie"]  

const users2 = [
    { Id: 1, Name: "Alice", Age: 30 },
    { Id: 2, Name: "Bob", Age: 25 },
    { Id: 3, Name: "Charlie", Age: 35 }
];

const transformesNames = users2.map(user => {
    if (user.Name.startsWith("A")) {
        return "Anacleto";
    }
});

console.log(transformesNames); // Output: ["Anacleto", undefined, undefined]

const cities = [
    { isVisited: true, name: "Tokio" },
    { isVisited: false, name: "Madagascar" },
    { isVisited: true, name: "Amsterdam" },
    { isVisited: false, name: "Seul" },
];

const processedCities = cities.map(city => {
    if (city.isVisited) {
        return city.name + " (Visitada)";
    }
    return city.name;
});

console.log(processedCities); // Output: ["Tokio (Visitada)", "Madagascar", "Amsterdam (Visitada)", "Seul"]



