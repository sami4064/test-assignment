import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

import {
  Box,
  CardMedia,
  CardContent,
  CardHeader,
  Card,
  Grid,
  IconButton,
  Typography,
  Tooltip,
} from '@material-ui/core';
import { AddBox, CheckBox } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  card: {
    cursor:'pointer',
  },
  media: {
    height: 190,
  },
}));

const MovieItemDetailed = (props) => {
  const {
    cols,
    movie,
    onAddToList,
  } = props;
  const {
    original_title: title,
    poster_full_path: imgUrl,
    overview,
    release_date: date,
    vote_average: ratingValue,
    addedToCart = false,
    id,
  } = movie;
  const classes = useStyles();
  const history = useHistory();

  const handleAddToListClicked = (movie) => {
    onAddToList && onAddToList(movie);
  };
  const handleClick = () => {
    history.push("/movie/" + id);
  }
  return (
    <Grid item xs={12 / cols}>
      <Card className={classes.card} onClick={handleClick}>
        <CardHeader
          action={(
            addedToCart
              ? <Tooltip title="Added to Cart" placement="top" arrow>
                <IconButton aria-label={`Added ${title} to cart`} >
                  <CheckBox />
                </IconButton>
              </Tooltip>

              : <Tooltip title="Add to Cart" placement="top" arrow>
                <IconButton aria-label={`Add ${title} to cart`} onClick={() => handleAddToListClicked(movie)}>
                  <AddBox />
                </IconButton>
              </Tooltip>)
          }
          title={title}
          subheader={(
            <Box component="p" borderColor="transparent">
              <Typography component="legend">{date && moment(date).format("MMM Do YYYY")}</Typography>
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
            <Typography variant="body2" color="textSecondary" component="p">
              {overview}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
}

MovieItemDetailed.propTypes = {
  movie: PropTypes.object.isRequired,
  onAddToList: PropTypes.func,
};

export default MovieItemDetailed;