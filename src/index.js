import React from 'react';
import ReactDom from 'react-dom';
import Navigation from './components/navigation';

import './styles/main.scss';

ReactDom.render(
  <main>
    <Navigation name='Dishant Mishra' />
  </main>,
  document.getElementById('root')
);

if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept('./components/navigation', () => {
    ReactDOM.render(
      <main>
        <Navigation name='Dishant Mishra' />
      </main>,
      rootId
    );
  });
}
