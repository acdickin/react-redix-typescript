import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider }  from 'react-redux';
import { applyMiddleware, createStore }  from 'redux';
import logger from 'redux-logger';
import App from './components/App';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(logger)(createStore)


import './index.css';

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App/>
  </Provider>
  , document.getElementById('root') as HTMLElement
);
registerServiceWorker();
