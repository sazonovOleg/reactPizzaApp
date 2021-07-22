import {createStore, compose, applyMiddleware} from 'redux';
import thunk from "redux-thunk";

import rootReducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() соединяем с расширением для google chrome
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk))
);

export default store