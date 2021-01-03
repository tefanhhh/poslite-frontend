import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import App from './app/app';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept((err) => console.log(err));
}
