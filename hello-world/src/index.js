import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

function tick() {
	const element = (
			<div>
				<h1> Hello World!</h1>
				<h2> The current time is:{new Date().toLocaleTimeString()}</h2>
			</div>
		);
	ReactDOM.render(
  		element,
  		document.getElementById('root')
	);
}
setInterval(tick, 1000);
