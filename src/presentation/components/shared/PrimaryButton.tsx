import {Platform, Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import create = StyleSheet.create;

interface PrimaryButtonProps {
  onPress: () => void;
  onLongPress: () => void;
  text: string;
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Platform.OS === 'android' ? '#5856D6' : 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonPressed: {
    backgroundColor: Platform.OS === 'android' ? '#4746AB' : 'white',
  },
});

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onPress,
  onLongPress,
  text,
}) => {
  return (
    <Pressable
      style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}
      onLongPress={onLongPress}
      onPress={onPress}>
      <Text
        style={{
          color: Platform.OS === 'android' ? 'white' : '#4746AB',
        }}>
        {text}
      </Text>
    </Pressable>
  );
};

export default PrimaryButton;
