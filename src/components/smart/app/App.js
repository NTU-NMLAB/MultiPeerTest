/* eslint-disable class-methods-use-this */

import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import MainView from './MainView.component';
import reducers from '../../../reducers/reducers';
import middlewares from '../../../utility/middlewares';

const store = createStore(
  reducers,
  applyMiddleware(...middlewares),
);

export default class MultiPeerTestApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainView />
      </Provider>
    );
  }
}
