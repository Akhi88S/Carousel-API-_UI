import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk'
import combineReducers from '../reducers/index';
export default function configureAppStore(preloadedState){
    const store=configureStore({
        reducer:combineReducers,
        middleware:[thunk],
        preloadedState
    })
    return store;
}