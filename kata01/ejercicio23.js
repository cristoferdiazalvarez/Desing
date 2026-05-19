const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];

function classifyMovies(param) {

    for (const movie of param) {
        if (movie.durationInMinutes < 100) {
      shortMovies.push(movie);
    }
    else if (movie.durationInMinutes >= 100 && movie.durationInMinutes <= 200) {
      mediumMovies.push(movie);
    }
    else {
      longMovies.push(movie);
    }
  }

  console.log("Películas cortas (<100min):", shortMovies);
  console.log("Películas medianas (100-200min):", mediumMovies);
  console.log("Películas largas (>200min):", longMovies);
}