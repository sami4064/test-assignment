import React, { useState, useEffect } from 'react';
import CartItemsContainer from '../components/cart-items-container'
import Container from '@material-ui/core/Container';
import Cart from '../services/cart-service';


const MyCart = (props) => {
    const [moviesInCart, setMoviesInCart] = useState(Cart.getMoviesInCart());

    const removeFromCart = (movie) => {
        const updateList = Cart.removeMovieFromCart(movie);
        setMoviesInCart(updateList);
    };

    return (
        <Container maxWidth="xl">
            <CartItemsContainer
                title="Movies Cart"
                moviesInCart={moviesInCart}
                removeFromCart={removeFromCart}
            />
        </Container>
    );

}

export default (MyCart);
