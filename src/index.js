import React from 'react';  // allows us to write HTML-like syntax in JS file
import ReactDOM from 'react-dom'; // import ReactDOM library
import './index.css';
import App from './App';  // App function from ./App
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));  // ReactDOM renders App, grab element with ID 'root' in index.html, then insert App()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
