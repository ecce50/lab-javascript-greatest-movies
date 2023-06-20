// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map((movie) => movie.director);
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergFilms = moviesArray.filter(
    (movie) =>
      movie.director === `Steven Spielberg` && movie.genre.includes("Drama")
  );
  return spielbergFilms.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  } else {
    const cumulatedScore = moviesArray.reduce(
      (acc, movie) => acc + movie.score,
      0
    );
    const averageScore = cumulatedScore / moviesArray.length;
    return parseFloat(averageScore.toFixed(2));
  }
}

/*Here is my attempt to add a conditional statement, but I don't know how to do it as part of a function that is written like this
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  } else {
    const cumulatedScore = moviesArray.reduce(
        (acc, movie) => if (movie.score != "") {
            acc + movie.score,
                0
        } else continue;
    );
    const averageScore = cumulatedScore / moviesArray.length;
    return parseFloat(averageScore.toFixed(2));
  }
} */

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  if (dramaMovies.length === 0) {
    return 0;
  } else {
    const dramaScoreTotal = dramaMovies.reduce(
      (acc, movie) => acc + movie.score,
      0
    );
    const dramaScoreAvg = dramaScoreTotal / dramaMovies.length;
    return parseFloat(dramaScoreAvg.toFixed(2));
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  byYear = moviesArray
    .slice()
    .sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
  return byYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const allTitles = moviesArray
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title));
  let top20 = [];
  if (moviesArray.length >= 20) {
    for (let i = 0; i < 20; i += 1) {
      top20.push(allTitles[i].title);
    }
  } else {
    for (let i = 0; i < moviesArray.length; i += 1) {
      top20.push(allTitles[i].title);
    }
  }
  return top20;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
