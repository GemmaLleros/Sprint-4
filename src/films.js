// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result = array.map((name) => name.director);
  //console.log("EXERCICE 1 ->",  result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const result = array.filter((movie) => movie.director === director);
  //console.log("EXERCICE 2 ->",  result);
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
  const sortMovies = arrayMovies.map((movie) => movie.title).sort().slice(0, 20);
  return sortMovies;
}

// Exercise 5: Order by year, ascending
/*Si son iguales, devolveremos 0.
  Si "a" debe ir ordenado antes que "b", devolvemos un número menor que 0.
  Si "a" debe ir ordenado después que "b", devolvemos un número mayor que 0.
*/
function orderByYear(array) {
  const sortByYears = array
    .map((movie) => movie).sort((a, b) => {
      const yearOrder = a.year - b.year;
      if (yearOrder === 0) {
        const titleOrder = a.title - b.title;
        return -1;
      } else return yearOrder;
    });
  return sortByYears;
}


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array,genre) {
  const moviesByGenre = array.filter((movie) => movie.genre.includes(genre) && movie.score);
  const sumScore = moviesByGenre.reduce((acc, movie) => {
    acc += movie.score;
    return acc;
  }, 0);
  const averageScoreFromGenre = Number((sumScore / moviesByGenre.length).toFixed(2));
  return averageScoreFromGenre;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

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
