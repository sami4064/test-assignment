import React, { useState, useEffect } from 'react';
import ItemsContainer from '../components/items-container'
import Container from '@material-ui/core/Container';
import Cart from '../services/cart-service';

import { listingCategories, categoryTitles } from '../constants/all-constants';
import {
    fetchTopRatedMovies,
    fetchLatestMovies,
    fetchPopularMovies,
    fetchNowPlayingMovies,
    fetchUpcomingMovies
} from '../services/tmdb-service';


const ListPage = (props) => {
    const {
        match: { params: { categoryId } = {} } = {},
    } = props;

    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [latestMovies, setLatestMovies] = useState([]);
    const [moviesInCart, setMoviesInCart] = useState(Cart.getMoviesInCart());

    // const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {

        const fetchListings = {
            [listingCategories.topRated]: () => {
                fetchTopRatedMovies().then((response) => {
                    setTopRatedMovies(response.results);
                }).catch((err) => {
                    console.error('fetchTopRatedMovies', err);
                });
            },

            [listingCategories.latest]: () => {
                fetchLatestMovies().then((response) => {
                    setLatestMovies(response.results);
                }).catch((err) => {
                    console.error('fetchLatestMovies', err);
                });
            },
            [listingCategories.nowShowing]: () => {
                fetchNowPlayingMovies().then((response) => {
                    setNowPlayingMovies(response.results);
                }).catch((err) => {
                    console.error('fetchNowPlayingMovies', err);
                });

            },
            [listingCategories.popular]: () => {
                fetchPopularMovies().then((response) => {
                    setPopularMovies(response.results);
                }).catch((err) => {
                    console.error('fetchPopularMovies', err);
                });

            },
            [listingCategories.upcoming]: () => {
                fetchUpcomingMovies().then((response) => {
                    setUpcomingMovies(response.results);
                }).catch((err) => {
                    console.error('fetchUpcomingMovies', err);
                });
            }
        }

        const request = fetchListings[categoryId];
        if(request){
            request();
        }

    }, [categoryId]);


    const onAddToList = (movie) => {
        const updateList = Cart.addMovieToCart(movie);
        setMoviesInCart(updateList);
    };
    const moviesListings = {
        [listingCategories.topRated]: topRatedMovies,
        [listingCategories.upcoming]: upcomingMovies,
        [listingCategories.latest]: latestMovies,
        [listingCategories.nowShowing]: nowPlayingMovies,
        [listingCategories.popular]: popularMovies,
    };
    const moviesList = moviesListings[categoryId]||[];
    return (
        <Container maxWidth="xl">
            <ItemsContainer
                title={categoryTitles[categoryId]}
                movies={moviesList}
                moviesInCart={moviesInCart}
                onAddToList={onAddToList}
            />
        </Container>
    );

}

export default (ListPage);
