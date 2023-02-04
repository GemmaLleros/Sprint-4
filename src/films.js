// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result = array.map((name) => name.director);
  return result;
}


// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const result = array.filter((movie) => movie.director === director);
  return result;
}


// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const moviesFrom1Director = getMoviesFromDirector(array, director);
  const sumScore = moviesFrom1Director.reduce((acc, movie) => {
    acc += movie.score;
    return acc;
  }, 0);
  const averageMovies = Number((sumScore / moviesFrom1Director.length).toFixed(2));
  return averageMovies;
}


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const arrayMovies = array;
  const sortMovies = arrayMovies
    .map((movie) => movie.title)
    .sort()
    .slice(0, 20);
  return sortMovies;
}


// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const sortedArray = [...array];
  return sortedArray.sort((a, b) => {
    const yearOrder = a.year - b.year;
    return yearOrder || a.title.localeCompare(b.title);
  });
}


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const moviesByGenre = array.filter(movie => movie.genre.includes(genre) && movie.score);
  if (!moviesByGenre.length) {
    return 0;
  }
  const sumScore = moviesByGenre.reduce((acc, movie) => {
    acc += movie.score;
    return acc;
  }, 0);
  const averageScoreFromGenre = Number((sumScore / moviesByGenre.length).toFixed(2));
  return averageScoreFromGenre;
}


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  return array.map((currentMovie) => {
    let durationInHours = Number(currentMovie.duration.match(/\d+(?=h)/g));
    let durationInMinutes = Number(currentMovie.duration.match(/\d+(?=min)/g));
    let totalDurationInMinutes = durationInHours * 60 + durationInMinutes;
    return { ...currentMovie, duration: totalDurationInMinutes };
  });
}


// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const bestMovies = array
    .filter((movie) => movie.year === year)
    .sort((a, b) => b.score - a.score)
    .shift();
  return [bestMovies];
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
