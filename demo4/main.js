import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import App from './App.jsx';

ReactDOM.render(<App promise={$.getJSON('https://api.github.com/users/octocat/gists')}/>, document.getElementById('app'));
