import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Link, Typography } from '@material-ui/core';
import withWidth from '@material-ui/core/withWidth';
import { calculateCartItemColumns } from '../helpers/calculateColumns';
import MovieItemCart from './movie-item-cart';

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


const CartItemsContainer = (props) => {
    const { moviesInCart = [], width, title, removeFromCart } = props;
    const classes = useStyles();
    const cols = calculateCartItemColumns(width);
    return (
        <>
            <h2>{title}</h2>
            {
                moviesInCart.length > 0
                    ? <Grid spacing={3} container className={classes.gridList} >
                        {moviesInCart.map((movie) => {
                            return (<MovieItemCart movie={{ ...movie }} cols={cols} removeFromCart={removeFromCart} />)
                        })}
                    </Grid>
                    : <Box component="span" m={1}>
                        <Typography className={classes.linkWrapper} color="textSecondary" component="div">
                            Your cart is empty !
                            <Link href={'/'} variant="subtitle2" >Add movies</Link>
                        </Typography>
                    </Box>
            }
        </>
    );
}

export default withWidth()(CartItemsContainer);