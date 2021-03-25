import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    top: 55,
    zIndex: 2,
    paddingHorizontal: 25
  },
  logo: {
    width: 100,
    height: 25,
    resizeMode: 'contain'
  },
  menu: {
    width: 25,
    height: 25,
    resizeMode: 'contain'
  }
});

export default styles;