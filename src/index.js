import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Context } from './store/firebaseContext'
import { UserContext } from './store/firebaseContext'
import firebase from './firebase/config'



ReactDOM.render(
    <Context.Provider value={{ firebase }}>
        <UserContext>
            <App />
        </UserContext>
    </Context.Provider>
    , document.getElementById('root'));
