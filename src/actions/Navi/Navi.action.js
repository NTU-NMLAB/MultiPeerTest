import NaviActionTypes from './Navi.type';

const NaviActions = {
  switchToScreen(screen) {
    return {
      type: NaviActionTypes.SWITCH_TO_SCREEN,
      screen,
    };
  },
  goHome() {
    return {
      type: NaviActionTypes.GO_HOME,
    };
  },
};

export default NaviActions;
