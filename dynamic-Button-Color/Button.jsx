import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from './colors';

const Button = ({color, label}) => {
  const buttonColors = {
    blue: COLORS.BLUE,
    black: COLORS.BLACK,
    white: COLORS.WHITE,
  };
  const buttonText = {
    blue: COLORS.WHITE,
    black: COLORS.WHITE,
    white: COLORS.BLACK,
  };

  const backgroundColor = buttonColors[color];
  const fontColor = buttonText[color];
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor}]}>
      <Text style={[styles.buttonText, {color: fontColor}]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: '50%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
  },
});
