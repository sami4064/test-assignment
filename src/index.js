import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/app';
import store from './js/helpers/store';
import { Provider } from 'react-redux';


const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    wrapper) : false;