import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: '#8d8d8d',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
  },
  buttonText: {
    color: '#8d8d8d',
    fontSize: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
});

export default styles;
