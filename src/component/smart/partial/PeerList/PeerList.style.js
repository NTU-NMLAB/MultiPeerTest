import { StyleSheet } from 'react-native';
import AppConstants from '../../../../constant/App.constant';

const styles = StyleSheet.create({
  listItem: {
    height: 64,
    marginHorizontal: '3%',
    marginVertical: 16,
    backgroundColor: '#b3c2bf',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 24,
    color: AppConstants.STYLE.COLOR.TEXT,
  },
});

export default styles;
