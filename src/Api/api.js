//20 POPULAR MOVIES EVERYDAY
export const popularApi = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_API}&page=1`;
//POPULAR TV SERIES
export const popularTvApi = `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.REACT_APP_MOVIE_API}` //DAY
//POPULAR MOVIE
export const popularMovieApi = `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_MOVIE_API}`;
//GET MOVIES GENRE
export const MovieGenreApi = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US`;
//GET TV GENRE 
export const TvGenreApi = `https://api.themoviedb.org/3/genre/TV/list?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US`
//TOP RATED MOVIES 
export const TopRatedMovies = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&page=1`;
//UPCOMING MOVIES
export const upcomingMoviesApi = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&page=1`;
//GET MOVIE DEETAILS
export const movieDetailApi = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US`
//GET MOVIE VIDEO
export const movieVideoAPi = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US`
//GET MOVIES PROVIDERS
export const movieProviderApi = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${process.env.REACT_APP_MOVIE_API}`
//MOVIE CREDITS 
export const movieCreditsApi = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US`
//TOP 20 MOVIES WITH GENRES
export const topMovieGenres = (genreId) => `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API}&with_genres=${genreId}&sort_by=vote_count.desc`
//GET SERIES DETAILS
export const seriesDetailApi = (seriesId)=>`https://api.themoviedb.org/3/tv/${seriesId}?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US`
//GET SERIES VIDEO 
export const seriesVideoApi = (seriesId) => `https://api.themoviedb.org/3/tv/${seriesId}/videos?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US`
//GET SERIES CREDITS
export const seriesCreditsApi = (seriesId) => `https://api.themoviedb.org/3/tv/${seriesId}/aggregate_credits?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US`
//GET SERIES SEASON CREDITS
export const seriesSeasonCreditsApi = (seriesId, seasonNr) => `https://api.themoviedb.org/3/tv/${seriesId}/season/${seasonNr}/credits?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US`
//SEARCH MOVIE/SERIES AND ACTORS
export const searchMovieApi = (searchId) => `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&page=1&include_adult=false&query=${searchId}`
export const searchActorApi = (searchId) => `https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&page=1&include_adult=false&query=${searchId}`
export const searchSeriesApi = (searchId) => `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&page=1&include_adult=false&query=${searchId}`
//GET LATEST MOVIE
export const latestMovieApi = `https://api.themoviedb.org/3/movie/latest?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US`
//GET POPULAR ACTORS
export const popularActorsApi = `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&page=1`
//GET ACTOR DETAILS
export const actorDetailApi =(actorId) => `https://api.themoviedb.org/3/person/${actorId}?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US`
//GET ACTOR MOVIES
export const actorMoviesApi = (actorId) => `https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US`