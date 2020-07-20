import MovieDB from '@leonardocabeza/the-movie-db';
const mdb = new MovieDB.v3('13da230cb593ae9189195d35b4ef9168');
const createImageSource = (url, baseUrl) => url ? `${baseUrl}w342/${url}` : '';

const applyConfigurationOnMovies = (movies = [], config) => {
    return movies.map(movie => {
        return {
            ...movie,
            poster_full_path: createImageSource(movie.poster_path, config.images.base_url),
        };
    });

};
const applyConfigurationOnMovieDetail = (movie, config) => {
    return {
            ...movie,
            poster_full_path: createImageSource(movie.poster_path, config.images.base_url),
        };;
};
export const fetchTopRatedMovies = () => {
    return mdb.configuration.api()
        .then((apiConfiguration) => {
            return mdb.movie.topRated()
                .then((response) => {
                    const { results } = response;
                    return { ...response, results: applyConfigurationOnMovies(results, apiConfiguration) };
                });
        });
};

export const fetchNowPlayingMovies = () => {
    return mdb.configuration.api()
        .then((apiConfiguration) => {
            return mdb.movie.nowPlaying()
                .then((response) => {
                    const { results } = response;
                    return { ...response, results: applyConfigurationOnMovies(results, apiConfiguration) };
                });
        });
};

export const fetchPopularMovies = () => {
    return mdb.configuration.api()
        .then((apiConfiguration) => {
            return mdb.movie.popular()
                .then((response) => {
                    const { results } = response;
                    return { ...response, results: applyConfigurationOnMovies(results, apiConfiguration) };
                });
        });
};

export const fetchUpcomingMovies = () => {
    return mdb.configuration.api()
        .then((apiConfiguration) => {
            return mdb.movie.upcoming()
                .then((response) => {
                    const { results } = response;
                    return { ...response, results: applyConfigurationOnMovies(results, apiConfiguration) };
                });
        });
};

export const fetchLatestMovies = () => {
    return mdb.configuration.api()
        .then((apiConfiguration) => {
            return mdb.movie.latest()
                .then((response) => {
                    const { results } = response;
                    return { ...response, results: applyConfigurationOnMovies(results, apiConfiguration) };
                });
        });
};
export const getMovieDetail = (movieId) => {
    return mdb.configuration.api()
        .then((apiConfiguration) => {
            return mdb.movie.details(movieId)
                .then((response) => {
                    return { results: applyConfigurationOnMovieDetail(response, apiConfiguration) };
                });
        });
}
export const search = (searchKey) => {
    return mdb.configuration.api()
        .then((apiConfiguration) => {
            const options = { query: searchKey };
            return mdb.search.movies(options)
                .then((response) => {
                    const { results } = response;
                    return { ...response, results: applyConfigurationOnMovies(results, apiConfiguration) };
                });
        });
}
