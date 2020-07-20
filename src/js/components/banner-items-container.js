import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { GridList, GridListTile, GridListTileBar, Link, Typography, IconButton, Tooltip } from '@material-ui/core';
import { AddBox, CheckBox } from '@material-ui/icons';
import withWidth from '@material-ui/core/withWidth';
import { calculateColumns } from '../helpers/calculateColumns';
import { truncateWithEllipsis } from '../helpers/truncateWithEllipsis';



const useStyles = makeStyles((theme) => ({
    categpryTitleWrapper: {
        marginTop: '0.5rem',
        marginBottom: '1rem',
    },
    image:{
        width:'100%',
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
    linkWrapper: {
        marginTop: '0.5rem',
        textAlign: 'right',
    },
}));


const BannerItemsContainer = (props) => {
    const { movies = [], moviesInCart = [], width, title, category, onAddToList } = props;

    const classes = useStyles();

    const handleAddToListClicked = (movie) => {
        onAddToList && onAddToList(movie);
    };


    const cols = calculateColumns(width);
    return (
        <>
            <div className={classes.categpryTitleWrapper}>
                <Link href={`/category/${category}`} variant="h5" color="textPrimary">
                    {title}
                </Link>
            </div>
            <GridList  spacing={20} cellHeight={290} cols={cols}>
                {movies.slice(0, cols * 2).map((movie) => {
                    const { title, poster_full_path: imgUri, id } = movie;
                    return (
                        <GridListTile  key={title} cols={1} onClick={() => { handleClick(movie) }}>
                            <Link href={`/movie/${id}`}>
                                <img className={classes.image} src={imgUri} alt={title} />
                                <GridListTileBar classes={{
                                    root: classes.titleBar,
                                    title: classes.title,

                                }}
                                    actionIcon={
                                        moviesInCart.find(movieInCart => movieInCart.id === id)
                                            ? <Tooltip title="Added to Cart" placement="top" arrow>
                                                <IconButton aria-label={`Added ${title} to cart`} >
                                                    <CheckBox />
                                                </IconButton>
                                            </Tooltip>

                                            : <Tooltip title="Add to Cart" placement="top" arrow>
                                                <IconButton aria-label={`Add ${title} to cart`} onClick={() => handleAddToListClicked(movie)}>
                                                    <AddBox />
                                                </IconButton>
                                            </Tooltip>
                                    }

                                    title={truncateWithEllipsis(title, 20)}
                                />
                            </Link>
                        </GridListTile>
                    );
                }
                )}
            </GridList>

            <Typography className={classes.linkWrapper} color="textSecondary" component="div">
                <Link href={`/category/${category}`} variant="subtitle2" >View more</Link>
            </Typography>
        </>
    );
}

export default withWidth()(BannerItemsContainer);