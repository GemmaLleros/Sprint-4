// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const  result = array.map((name) => name.director);
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
function moviesAverageOfDirector(array, director){
  const moviesFrom1Director = getMoviesFromDirector(array, director);
  const sumScore = moviesFrom1Director.reduce((acc, movie ) => {acc += movie.score; 
    return acc;
    }, 0);
  const averageMovies = Number((sumScore / moviesFrom1Director.length).toFixed(2));
  console.log("EXERCICE 3 ->", averageMovies);
  return averageMovies;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const arrayMovies = array;
  const sortMovies = arrayMovies.map((movie) => movie.title).sort().slice(0, 20);
  return sortMovies;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const arrayYear = array;
  const year = arrayYear.map((movie)=> movie.year).sort((a, b) => { 
      if(a.year === b.year) {
        if(a.title < b.title){
        
        }       
      }
      if(a.year > b.year) {
        return -1;
      }
      return 1;
    });
    

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

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
