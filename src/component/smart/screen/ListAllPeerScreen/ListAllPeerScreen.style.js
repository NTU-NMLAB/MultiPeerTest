import { StyleSheet } from 'react-native';
import AppConstants from '../../../../constant/App.constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 7,
  },
  peerIdListItem: {
    height: 64,
    marginHorizontal: '3%',
    marginVertical: 16,
    backgroundColor: '#b3c2bf',
    justifyContent: 'center',
    alignItems: 'center',
  },
  peerIdListItemTxt: {
    fontSize: 24,
    color: AppConstants.STYLE.COLOR.TEXT,
  },
  backButton: {
    flex: 1,
    margin: '3%',
    borderRadius: 10,
    backgroundColor: AppConstants.STYLE.COLOR.MAIN_BG,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: AppConstants.STYLE.COLOR.TEXT,
  },
});

export default styles;
