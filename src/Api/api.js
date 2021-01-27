const apiKey = `7d01e2f21937769f340b6be2e4f1f146`;
const movieName = 'dsada';
//20 POPULAR MOVIES EVERYDAY
export const popularApi = `https://api.themoviedb.org/3/movie/popular?api_key=7d01e2f21937769f340b6be2e4f1f146&page=1`;
//SEARCH MOVIE
export const searchMovie = `https://api.themoviedb.org/3/search/movie?api_key=7d01e2f21937769f340b6be2e4f1f146&query=${movieName}`
//POPULAR TV SERIES
export const popularTvApi = `https://api.themoviedb.org/3/trending/tv/day?api_key=7d01e2f21937769f340b6be2e4f1f146` //DAY
//POPULAR MOVIE
export const popularMovieApi = `https://api.themoviedb.org/3/trending/movie/day?api_key=7d01e2f21937769f340b6be2e4f1f146`;
//GET MOVIES GENRE
export const MovieGenreApi = `https://api.themoviedb.org/3/genre/movie/list?api_key=7d01e2f21937769f340b6be2e4f1f146&language=en-US`;
//GET TV GENRE 
export const TvGenreApi = `https://api.themoviedb.org/3/genre/TV/list?api_key=7d01e2f21937769f340b6be2e4f1f146&language=en-US`
//TOP RATED MOVIES 
export const TopRatedMovies = `https://api.themoviedb.org/3/movie/top_rated?api_key=7d01e2f21937769f340b6be2e4f1f146&language=en-US&page=1`;
//UPCOMING MOVIES
export const upcomingMoviesApi = `https://api.themoviedb.org/3/movie/upcoming?api_key=7d01e2f21937769f340b6be2e4f1f146&language=en-US&page=1`;
//GET MOVIE DEETAILS
export const movieDetailApi = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}?api_key=7d01e2f21937769f340b6be2e4f1f146&language=en-US`
//GET MOVIE VIDEO
export const movieVideoAPi = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=7d01e2f21937769f340b6be2e4f1f146&language=en-US`
//GET MOVIES PROVIDERS
export const movieProviderApi = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=7d01e2f21937769f340b6be2e4f1f146`
//MOVIE CREDITS 
export const movieCreditsApi = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=7d01e2f21937769f340b6be2e4f1f146&language=en-US`
//TOP 20 MOVIES WITH GENRES
export const topMovieGenres = (genreId) => `https://api.themoviedb.org/3/discover/movie?api_key=7d01e2f21937769f340b6be2e4f1f146&with_genres=${genreId}&sort_by=popularity.desc`
//DODAC NAJLEPZE W DANYM GATUNKU!!

