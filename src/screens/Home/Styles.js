import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#fff',
    width: '70%',
    marginLeft: 25,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 200,
    height: 40,
    marginTop: 25,
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchButton: {
    backgroundColor: '#fff',
    borderRadius: 30,
    width: Dimensions.get('screen').width - 20,
    marginHorizontal: 10,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 30,
    elevation: 2,
    zIndex: 1,
  },
});

export default styles;
