import { StyleSheet } from 'react-native';
import AppConstants from '../../../../constant/App.constant';

const styles = StyleSheet.create({
  container: {
    paddingTop: '8%',
    flex: 1,
  },
  button: {
    flex: 1,
    marginHorizontal: '6%',
    marginVertical: '3%',
    borderRadius: 10,
    backgroundColor: AppConstants.STYLE.COLOR.MAIN_BG,
  },
  buttonTitle: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: AppConstants.STYLE.COLOR.TEXT,
  },
  buttonDesc: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDescText: {
    fontSize: 14,
    color: '#e9ece5',
  },
});

export default styles;
