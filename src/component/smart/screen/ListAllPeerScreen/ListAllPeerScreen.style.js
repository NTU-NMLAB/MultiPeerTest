import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 7,
  },
  selfIdTxtContainer: {
    height: 24,
    backgroundColor: '#6a5750',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selfIdTxt: {
    fontSize: 16,
    color: '#feffff',
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
    color: '#feffff',
  },
  backButton: {
    flex: 1,
    margin: '3%',
    borderRadius: 10,
    backgroundColor: '#6a5750',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#feffff',
  },
});

export default styles;
