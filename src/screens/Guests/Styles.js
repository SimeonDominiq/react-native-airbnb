import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    marginHorizontal: 20,
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'lightgrey',
  },
  btnText: {
    fontSize: 20,
    color: '#474747',
  },
  counterText: {
    marginHorizontal: 20,
    fontSize: 16,
  },
});

export default styles;
