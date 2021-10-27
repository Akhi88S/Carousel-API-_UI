import './App.css';
import {Provider} from 'react-redux'
import configureStore from './store/index'
import React from 'react'
import {Routes} from './Routes/mainRoutes'
import "./components/mainPage.css";
export const store=configureStore({});
function App() {
  return (
    <React.Fragment>
    <Provider store={store}>
    <Routes/>
    </Provider>
    </React.Fragment>
  );
}

export default (App);
