import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from './Button';
import {COLORS} from './colors';

const Main = () => {
  return (
    <View style={styles.mainContainer}>
      <Button color={COLORS.BLUE} label="Blue Button" />
      <Button color={COLORS.WHITE} label="White Button" />
      <Button color={COLORS.BLACK} label="Black Button" />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
  },
});
