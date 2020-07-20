import React, { useState } from 'react';
import { TextField, Link } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

import { search } from '../services/tmdb-service';

const useStyles = makeStyles({
    root: {
        width: '100%',
        marginLeft: '250px',
    },
    option: {
        fontSize: 15,
        '& > a': {
            display: 'flex',
            alignItems: 'center',
            '& > span': {
                marginRight: 10,
                marginRight: 10,
                fontSize: 18,
            },
        },


    },
});

const SearchBar = () => {
    const classes = useStyles();
    const [searchedMovies, setSearchedMovies] = useState([]);
    const [searchTxt, setSearchTxt] = useState('');
    const handleTextChange = (updatedText) => {
        setSearchTxt(updatedText);
        search(updatedText)
            .then((response) => {
                setSearchedMovies(response.results);
            })
            .catch((err) => { console.error('search err', err) });
    };


    return (
        <Autocomplete
            options={searchedMovies}
            noOptionsText="No movies"
            classes={{
                root: classes.root,
                option: classes.option,
            }}
            inputValue={searchTxt}
            autoHighlight
            freeSolo
            disableClearable
            getOptionLabel={(option) => option.original_title}
            renderOption={(option) => (
                <Link href={`/movie/${option.id}`}>
                        {option.poster_path ? <span><img width={50} src={option.poster_full_path} /></span> : <span style={{ width: '50px' }} />}
                        <span>{option.original_title} {option.release_date}</span>
                </Link>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search"
                    variant="filled"
                    fullWidth
                    inputProps={{
                        ...params.inputProps,
                    }}
                    value={searchTxt}
                    onChange={(e) => { handleTextChange(e.target.value); }}
                />
            )}
        />
    );
}

export default SearchBar;
