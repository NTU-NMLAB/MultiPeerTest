/* eslint-disable class-methods-use-this */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './Store';
import MainView from './MainView.component';

export default class MultiPeerTestApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainView />
      </Provider>
    );
  }
}
