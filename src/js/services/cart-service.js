const moviesAddedToCartKey = "moviesAddedToCart";
const addMovieToCart = (movie) => {
    const addedMovies = getMoviesInCart();
    const updatedMoviesList = [movie, ...addedMovies];
    localStorage.setItem(moviesAddedToCartKey, JSON.stringify(updatedMoviesList));
    return updatedMoviesList;
}

const removeMovieFromCart = (movie) => {
    const addedMovies = getMoviesInCart();
    const updatedMoviesList = addedMovies.filter(addedMovie => addedMovie.id !== movie.id);
    localStorage.setItem(moviesAddedToCartKey, JSON.stringify(updatedMoviesList));
    return updatedMoviesList;
}

const getMoviesInCart = () => {
    return localStorage.getItem(moviesAddedToCartKey) ? JSON.parse(localStorage.getItem(moviesAddedToCartKey)) : [];
}

export default {
    addMovieToCart,
    removeMovieFromCart,
    getMoviesInCart,
};

