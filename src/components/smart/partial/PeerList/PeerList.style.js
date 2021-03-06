import { StyleSheet } from 'react-native';
import AppConstants from '../../../../constants/App.constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  listItem: {
    height: 64,
    marginHorizontal: '3%',
    marginVertical: 16,
    backgroundColor: '#b3c2bf',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionHeadTxt: {
    backgroundColor: AppConstants.STYLE.COLOR.MAIN_BG_LIGHT,
    textAlign: 'center',
  },
  listItemNameText: {
    fontSize: 24,
    color: AppConstants.STYLE.COLOR.TEXT,
  },
  listItemNameTextConnected: {
    fontSize: 24,
    color: 'green',
  },
});

export default styles;
