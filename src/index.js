import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './layout/App';
import registerServiceWorker from './registerServiceWorker';

// import {Provider} from 'react-redux';
// import store from "./redux/store";

/*
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
*/

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
