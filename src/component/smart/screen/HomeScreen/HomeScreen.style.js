import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flex: 1,
    margin: '3%',
    borderRadius: 10,
    backgroundColor: '#b3c2bf',
  },
  buttonTitle: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#feffff',
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
