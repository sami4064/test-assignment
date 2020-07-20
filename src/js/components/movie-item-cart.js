import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    CardMedia,
    CardContent,
    Card,
    Grid,
    Typography,
} from '@material-ui/core';


import { Delete } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    card: {
    },
    media: {
        height: 190,
    },
    root: {
        display: 'flex',
        justifyContent:'space-between',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '80%',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 200,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    removeButton: {
        width: 150,
    },
}));

const MovieItemCart = (props) => {
    const {
        loading = false,
        cols,
        movie,
        removeFromCart,
    } = props;
    const {
        original_title: title,
        poster_full_path: imgUrl,
        overview,
    } = movie;
    const classes = useStyles();
    const handleremoveFromCartClicked = (movie) => {
        removeFromCart && removeFromCart(movie);
    };

    return (
        <Grid item xs={12 / cols}>
            <Card className={classes.root}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            {title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {overview}
                        </Typography>
                    </CardContent>
                    <Button
                        className={classes.removeButton}
                        startIcon={<Delete />}
                        variant="contained"
                        color="secondary"
                        onClick={() => handleremoveFromCartClicked(movie)}>
                        Remove
                            </Button>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={imgUrl}
                    title={title}
                />
            </Card>
        </Grid>
    );
}

MovieItemCart.propTypes = {
    loading: PropTypes.bool,
    movie: PropTypes.object.isRequired,
    removeFromCart: PropTypes.func,
};

export default MovieItemCart;