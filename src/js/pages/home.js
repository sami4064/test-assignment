import React, { useState, useEffect } from 'react';
import BannerItemsContainer from '../components/banner-items-container'
import Container from '@material-ui/core/Container';
import { listingCategories, categoryTitles } from '../constants/all-constants';

import {
  fetchTopRatedMovies, fetchLatestMovies, fetchPopularMovies, fetchNowPlayingMovies, fetchUpcomingMovies,
} from '../services/tmdb-service';

import Cart from '../services/cart-service';

const Home = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [latestMovies, setLatestMovies] = useState([]);
  const [moviesInCart, setMoviesInCart] = useState(Cart.getMoviesInCart());
  // const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {

    fetchTopRatedMovies().then((response) => {
      setTopRatedMovies(response.results);
    }).catch((err) => {
      console.error('fetchTopRatedMovies', err);
    });


    fetchLatestMovies().then((response) => {
      setLatestMovies(response.results);
    }).catch((err) => {
      console.error('fetchLatestMovies', err);
    });

    fetchNowPlayingMovies().then((response) => {
      setNowPlayingMovies(response.results);
    }).catch((err) => {
      console.error('fetchNowPlayingMovies', err);
    });

    fetchPopularMovies().then((response) => {
      setPopularMovies(response.results);
    }).catch((err) => {
      console.error('fetchPopularMovies', err);
    });

    fetchUpcomingMovies().then((response) => {
      setUpcomingMovies(response.results);
    }).catch((err) => {
      console.error('fetchUpcomingMovies', err);
    });
  }, []);

  const onAddToList = (movie) => {
    const updateList = Cart.addMovieToCart(movie);
    setMoviesInCart(updateList);
  };

  return (
    <Container maxWidth="xl">
      <h1>The Movies Database</h1>
      <BannerItemsContainer
        title={categoryTitles[listingCategories.topRated]}
        category={listingCategories.topRated}
        movies={topRatedMovies}
        moviesInCart={moviesInCart}
        onAddToList={onAddToList}
      />
      <BannerItemsContainer
        title={categoryTitles[listingCategories.upcoming]}
        category={listingCategories.upcoming}
        moviesInCart={moviesInCart}
        movies={upcomingMovies}
        onAddToList={onAddToList}
      />
      <BannerItemsContainer
        title={categoryTitles[listingCategories.popular]}
        category={listingCategories.popular}
        moviesInCart={moviesInCart}
        movies={popularMovies}
        onAddToList={onAddToList}
      />

      <BannerItemsContainer
        title={categoryTitles[listingCategories.nowShowing]}
        category={listingCategories.nowShowing}
        moviesInCart={moviesInCart}
        movies={nowPlayingMovies}
        onAddToList={onAddToList}
      />
    </Container>
  );

}

export default (Home);
