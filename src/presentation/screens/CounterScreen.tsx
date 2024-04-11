import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import {PrimaryButton} from '../components';
import {Button} from 'react-native-paper';

const CounterScreen = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>
      {/*<PrimaryButton*/}
      {/*  onPress={handleClick}*/}
      {/*  onLongPress={handleReset}*/}
      {/*  text="Incrementar"*/}
      {/*/>*/}
      <Button onPress={handleClick} onLongPress={handleReset} mode="contained">
        Incrementar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300',
  },
});

export default CounterScreen;
