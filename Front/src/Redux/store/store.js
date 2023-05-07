import { createStore, applyMiddleware,compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from "../reducer/redux"; // donde este tu reducer

const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose;


const store = createStore(
    reducer, 
    composeEnhancer(applyMiddleware(thunkMiddleware)));

export default store;

// react-redux: creamos el store  Sepuede reutilizar  
