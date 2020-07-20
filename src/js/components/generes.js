import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1.5,0),
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
}));

export const Genres = (props) => {
    const classes = useStyles();
    const { genres = [] } = props;

    return genres.length > 0
        ? <div className={classes.root}>
            {genres.map(genre => <Chip key={genre.id} label={genre.name} />)}
        </div>
        : <></>;

}

export default Genres;