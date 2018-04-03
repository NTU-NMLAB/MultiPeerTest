import { StyleSheet } from 'react-native';
import AppConstants from '../../../../constants/App.constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  textInput: {
    flex: 9,
    margin: 12,
    fontSize: 20,
    borderRadius: 12,
    backgroundColor: AppConstants.STYLE.COLOR.MAIN_BG_LIGHT,
    paddingLeft: 12,
  },
  browseBtn: {
    flex: 1,
    padding: '5%',
  },
  browseBtnImg: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
});

export default styles;
