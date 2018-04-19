import { combineReducers } from 'redux';
import navi from './Navi.reducer';
import multipeer from '../submodule/react-native-multipeer/reducers/MultiPeer.reducer';

export default combineReducers({
  navi,
  multipeer,
});
