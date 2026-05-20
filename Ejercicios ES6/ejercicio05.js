const ages1 = [22, 14, 24, 55, 65, 21, 42];

const adultAges = ages1.filter(age => age > 18);

console.log(adultAges);

const ages2 = [22, 14, 24, 55, 65, 21, 42];

const evenAges = ages2.filter(age => age % 2 === 0);

console.log(evenAges);


const streamers1 = [
    { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
    { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
    { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
    { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" }
];

const lolStreamers = streamers1.filter(streamer => streamer.gameMorePlayed === "League of Legends");

console.log(lolStreamers);

const streamers2 = [
    { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
    { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
    { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
    { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" }
];

const streamersWithU = streamers2.filter(streamer => streamer.name.toLowerCase().includes("u"));

console.log(streamersWithU);

const streamers3 = [
    { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
    { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
    { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
    { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" }
];

const streamersOlderThan35 = streamers3.filter(streamer => streamer.age > 35);

const finalLegendsStreamers = legendStreamers.map(streamer => {
    if (streamer.age > 35) {
        return {
            gameMorePlayed: streamer.gameMorePlayed,toUpperCase()  
            };  
        }
    return streamer;
});

console.log(finalLegendsStreamers);