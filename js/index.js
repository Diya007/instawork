require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import App from './components/app';

const createStoreWithMiddleWare = applyMiddleware()(createStore);

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Provider store = {createStoreWithMiddleWare(reducers)}>
			<App/>
		</Provider>
		
		, document.getElementById('app')
	);
})