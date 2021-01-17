import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavTabs from './components/sidebar';
import { Provider } from 'react-redux';
import store from './store/configure-store';


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
    <NavTabs className=" topper" />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

