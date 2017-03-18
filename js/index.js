require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/list';

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(<List />, document.getElementById('app'));
})