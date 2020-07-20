import React, { Component } from 'react';
import Home from './pages/home';
import ListPage from './pages/list-page';
import MyCart from './pages/my-cart';
import MovieDetail from './pages/movie-detail';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import MenuBar from './components/menu-bar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import orange from "@material-ui/core/colors/orange";
import lightBlue from "@material-ui/core/colors/lightBlue";

const history = createBrowserHistory({ basename: 'mytheresa-test' });

const App = (props) => {

    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: 'dark',
                    primary: {
                        light: orange[300],
                        main: orange[500],
                        dark: orange[700]
                    },
                    secondary: {
                        light: lightBlue[300],
                        main: lightBlue[500],
                        dark: lightBlue[700]
                    },
                    contrastThreshold: 6,
                    tonalOffset: 0.4,
                },
                typography: {
                    fontFamily: 'Noto Serif TC',
                },
            }),
        [],
    );


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <MenuBar />
            <Router history={history}>
                <div>
                    <Route path="/category/:categoryId" component={ListPage} />
                    <Route path="/movie/:movieId" component={MovieDetail} />
                    <Route path="/my-cart" component={MyCart} />
                    <Route exact path="/" component={Home} />
                </div>
            </Router>
        </ThemeProvider>
    );

}

export default (App);
