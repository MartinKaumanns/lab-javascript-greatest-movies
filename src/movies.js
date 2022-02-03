// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors (movies) {
  const directorsOnly = movies.map((movie) => movie.director); 
  return directorsOnly;
};
// console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
const spielbergOnly = movies.filter((movies) =>
movies.director === 'Steven Spielberg' && movies.genre.includes('Drama'));
return spielbergOnly.length;
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (!movies.length) return 0;
  const avScoreOfAllMovies = movies.reduce((acc, movies) => 
    {return acc + (movies.score || 0)}, 0); //movies.score || 0 -> just movies woth a score
  const result = avScoreOfAllMovies / movies.length;
 return result.toFixed(2)*1;

}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  if (!movies.length) return 0;
 

  const dramaMoviesOnly = movies.filter((movies) =>
  movies.genre.includes('Drama'));
  
  if (!dramaMoviesOnly.length) return 0;

    const avScoreOfDramaMovies = dramaMoviesOnly.reduce((acc, movies) =>
    {return acc + movies.score}, 0);
    const dramaScoreResult = avScoreOfDramaMovies / dramaMoviesOnly.length;
    return dramaScoreResult.toFixed(2)*1; 
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {

  /* const moviesClone = [ ...movies];
moviesClone.sort ((a, b) => { 
  if (a.year < b.year){
return -1;
  } else if (a.year > b.year) {
return 1;
  } else {
return  a.title.localeCompare(b.title);
}
});
*/
}; 

// const moviesSortedByYear = movies.year.sort((a, b) => a - b)
// return moviesSortedByYear;
// }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
 function orderAlphabetically(movies) {
  const titles = movies.map((movie) =>{
    return movie.title;
  })
} 

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
