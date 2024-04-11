import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import {PrimaryButton} from '../components';
import {FAB} from 'react-native-paper';
import {globalStyles} from '../theme/global.styles.ts';

import Icon from 'react-native-vector-icons/Ionicons';

const CounterScreen = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <View style={globalStyles.centerContiner}>
      <Text style={globalStyles.title}>{count}</Text>
      <FAB
        icon="add"
        style={globalStyles.fab}
        onPress={handleClick}
        onLongPress={handleReset}
      />
    </View>
  );
};

export default CounterScreen;
