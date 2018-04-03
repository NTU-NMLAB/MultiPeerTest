import NaviActionTypes from '../actions/Navi/Navi.type';

const DEFAULT_SCREEN = 'Home';
const initState = {
  screen: DEFAULT_SCREEN,
};

export default (state = initState, action) => {
  switch (action.type) {
    case NaviActionTypes.SWITCH_TO_SCREEN:
      return {
        ...state,
        screen: action.screen,
      };
    case NaviActionTypes.GO_HOME:
      return {
        ...state,
        screen: DEFAULT_SCREEN,
      };
    default:
      return state;
  }
};
