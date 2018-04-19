import { createStore, applyMiddleware } from 'redux';
import reducers from '../../../reducers/reducers';
import middlewares from '../../../utility/middlewares';

const store = createStore(
  reducers,
  applyMiddleware(...middlewares),
);

export default store;
