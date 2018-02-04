import React from 'react';
import ReactDOM from 'react-dom';   
import App from './Pages';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import Reducers from './Redux';

// Redux
const middleware = applyMiddleware(thunk);
const store = createStore(Reducers, middleware);

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root')
);