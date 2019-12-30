import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

import './styles/index.scss';

const rootId = document.getElementById('root');

render(<App />, rootId);

console.log(process.env.NODE_ENV);

if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept('./components/navigation', () => {
    ReactDOM.render(<App />, rootId);
  });
}
