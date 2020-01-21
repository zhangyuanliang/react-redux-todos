import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './redux/store.js'
import RouterConfig from './routerConfig'

import 'antd/dist/antd.css';
import './global.scss'

ReactDOM.render(
  <Provider store={store}>
    <RouterConfig />
  </Provider>,
  document.getElementById('root'));
