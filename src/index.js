import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; //proveedor de rutas
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk'; //para llamadas asíncronas
import reducers from './reducers';
// createStore: crea el mega store 
// applyMiddleware es el intermediario de las acciones

// se usan { } cuando se trata de objetos, cuando no, los nombres van solos

const history = createHistory();
const middleware = [routerMiddleware(history), thunk]; //conectar el router con redux

const store = createStore(
  reducers,
  applyMiddleware(...middleware)
);

//lo interesante es el wrap del proyecto con react, router y redux
//redux tiene el control de la aplicación
ReactDOM.render(
  <Provider store={ store }>
    <App history={ history }/>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
