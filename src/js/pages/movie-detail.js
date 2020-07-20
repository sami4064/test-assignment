import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Genres from '../components/generes';
import {
  CardMedia,
  CardContent,
  CardHeader,
  Container,
  Box,
  IconButton,
  Typography,
  Tooltip,
} from '@material-ui/core';
import { AddBox, CheckBox } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import { getMovieDetail } from '../services/tmdb-service'
import CartService from '../services/cart-service'
import moment from 'moment';


const useStyles = makeStyles((theme) => ({
  media: {
    width: 170,
    height: 300,
    marginLeft: theme.spacing(2),
  },
}));

const MovieDetail = (props) => {
  const [movieDetail, setMovieDetail] = useState({});
  const [moviesInCart, setMoviesInCart] = useState([]);
  const {
    match: { params: { movieId } = {} } = {},
  } = props;

  useEffect(() => {
    const moviesInCart = CartService.getMoviesInCart();
    setMoviesInCart(moviesInCart);
    getMovieDetail(movieId)
      .then((response) => {
        setMovieDetail(response.results);
      })
      .catch((err) => { console.log('err', err) });
  }, [movieId]);

  const {
    original_title: title,
    poster_full_path: imgUrl,
    overview,
    status,
    release_date: date,
    vote_average: ratingValue,
    genres,
  } = movieDetail;

  const addedToCart = moviesInCart.find(movie => movie.id == movieId) ? true : false;
  const classes = useStyles();

  const handleAddToListClicked = (movie) => {
    const updatedCartList = CartService.addMovieToCart(movie);
    setMoviesInCart(updatedCartList);
  };

  return (
    <Container maxWidth="xl">
      <CardHeader
        action={(
          addedToCart
            ? <Tooltip title="Added to Cart" placement="top" arrow>
              <IconButton aria-label={`Added ${title} to cart`} >
                <CheckBox />
              </IconButton>
            </Tooltip>

            : <Tooltip title="Add to Cart" placement="top" arrow>
              <IconButton aria-label={`Add ${title} to cart`} onClick={() => handleAddToListClicked(movieDetail)}>
                <AddBox />
              </IconButton>
            </Tooltip>)
        }
        title={title}
        subheader={(
          <Box component="p" borderColor="transparent">
            <Typography component="legend">{status}&nbsp;{date && moment(date).format("MMM Do YYYY")}</Typography>
            <Rating name="disabled" value={ratingValue / 2} precision={0.1} disabled />
          </Box>
        )}
      />
      {(
        <CardMedia
          className={classes.media}
          image={imgUrl}
          title={title}
        />
      )}

      <CardContent>
        {(
          <>
          <Typography variant="body2" color="textSecondary" component="p">
            {overview}
          </Typography>
          <Genres genres={genres}/>
          </>
        )}
      </CardContent>
    </Container>
  );
}


export default MovieDetail;