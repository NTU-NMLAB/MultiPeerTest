import { StyleSheet } from 'react-native';
import AppConstants from '../../../../constant/App.constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 7,
  },
  backButton: {
    flex: 1,
    margin: '3%',
    borderRadius: 10,
    backgroundColor: '#b3c2bf',
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
