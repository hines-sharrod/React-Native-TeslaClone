import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: Dimensions.get('window').height
  },
  titles: {
    alignItems: 'center',
    marginTop: '40%',
    width: '100%',
    position: 'absolute'
  },
  carTitle: {
    fontSize: 40,
    fontWeight: '500',
  },
  subTitle: {
    fontSize: 16,
    color: '#5c5e62',
    marginTop: 5
  },
  carImage: {
    width: '100%',
    height: '100%',
  },
  subTitleCTA: {
    textDecorationLine: 'underline'
  }
});

export default styles;