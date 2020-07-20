import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import withWidth from '@material-ui/core/withWidth';
import { calculateDetailItemColumns } from '../helpers/calculateColumns';
import MovieItemDetailed from './movie-item-detailed';

const useStyles = makeStyles((theme) => ({
    gridList: {

    },
    title: {
        whiteSpace: 'inherit',
        minHeight: '3rem',

    },
    titleBar: {
        minHeight: '3.5rem',
    },
    lightBulb: {
        verticalAlign: 'middle',
        marginRight: theme.spacing(1),
    },
}));


const ItemsContainer = (props) => {
    const { movies = [], moviesInCart = [], width, title, onAddToList } = props;
    const classes = useStyles();
    const cols = calculateDetailItemColumns(width);
    return (
        <>
            <h2>{title}</h2>
            <Grid spacing={3} container className={classes.gridList} >
                {movies.map((movie) => {
                    const addedToCart = moviesInCart.find(movieInCart => movieInCart.id === movie.id) ? true : false;
                    return (<MovieItemDetailed movie={{ ...movie, addedToCart }} cols={cols} onAddToList={onAddToList} />)
                })}
            </Grid>
        </>
    );
}

export default withWidth()(ItemsContainer);