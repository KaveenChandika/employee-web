import { createStore, applyMiddleware, compose,combineReducers } from 'redux';
import thunk from "redux-thunk";

import employee from "../employee/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        employee
    }),
    composeEnhancers(
        applyMiddleware(
            thunk
        )
    )
);

export default store;

