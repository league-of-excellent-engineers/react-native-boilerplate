import React from 'react';
import { Provider } from 'react-redux';
import {
    createStore,
    applyMiddleware,
    compose,
    combineReducers,
} from 'redux';
import { AppNavigation } from './screens/AppNavigation';
import { jokesApi } from './middleware';
import {
    jokesReducer,
    navigationReducer,
} from './reducers';


const Reducer = combineReducers({
    jokes: jokesReducer,
    navigation: navigationReducer,
});

const Store = createStore(
    Reducer,
    {},
    compose(applyMiddleware(jokesApi))
);

const Jokes =
    () => (
        <Provider store={Store}>
            <AppNavigation />
        </Provider>
    );

export { Jokes };
