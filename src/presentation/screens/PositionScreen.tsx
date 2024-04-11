import {StyleSheet, Text, View} from 'react-native';

const PositionScreen = () => {
  return (
    <View style={style.container}>
      <View style={style.greenBox} />
      <View style={style.purpleBox} />
      <View style={style.orangeBox} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: '#5858D4',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',

    right: 0,
  },
  greenBox: {
    // width: 100,
    // height: 100,
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: 'white',
    // position: 'absolute',
    // bottom: 0,
    // right: 0,
    // top: 0,
    // left: 0,
    ...StyleSheet.absoluteFillObject,
  },
});

export default PositionScreen;
