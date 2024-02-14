import {useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import {GestureHandlerRootView, TextInput} from 'react-native-gesture-handler';
import Screen from './src/components/Screen';

import AppTextinput from './src/components/AppTextinput';
import AppPicker from './src/components/AppPicker';

const categories = [
  {label: 'Furniture', value: 1},
  {label: 'Clothing', value: 2},
  {label: 'Camera', value: 3},
];

const App = () => {
  const [category, setCategory] = useState();
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Screen>
        <AppPicker
          selectedItem={category}
          onSelectItem={item => setCategory(item)}
          icon={'apps'}
          placeholder={'Category'}
          items={categories}
        />
        <AppTextinput icon={'email'} placeholder="Email" />
      </Screen>
    </GestureHandlerRootView>
  );
};


import {
    Button,
    Modal,
    StyleSheet,
    FlatList,
    TouchableWithoutFeedback,
    View,
  } from 'react-native';
  import React, {useState} from 'react';
  
  import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
  import defaultStyles from '../config/styles';
  import AppText from './AppText';
  import Screen from './Screen';
  import PickerItem from './PickerItem';
  
  const AppPicker = ({icon, placeholder, items, selectedItem, onSelectItem}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
      <>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
          <View style={styles.container}>
            {icon && (
              <MaterialIcon
                name={icon}
                size={20}
                color={defaultStyles.colors.medium}
                style={styles.icon}
              />
            )}
            <AppText style={styles.text}>
              {selectedItem ? selectedItem.label : placeholder}
            </AppText>
            <MaterialIcon
              name={'chevron-down'}
              size={20}
              color={defaultStyles.colors.medium}
            />
          </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType="slide">
          <Screen>
            <Button onPress={() => setModalVisible(false)} title="Close" />
            <FlatList
              data={items}
              keyExtractor={item => item.value.toString()}
              renderItem={({item}) => (
                <PickerItem
                  label={item.label}
                  onPress={() => {
                    setModalVisible(false);
                    onSelectItem(item);
                  }}
                />
              )}
            />
          </Screen>
        </Modal>
      </>
    );
  };
  
  export default AppPicker;
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: defaultStyles.colors.light,
      borderRadius: 25,
      flexDirection: 'row',
      width: '100%',
      padding: 15,
      marginVertical: 10,
    },
    icon: {
      marginRight: 10,
      alignSelf: 'center',
    },
    text: {
      flex: 1,
    },
  });
  



  import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppText from './AppText';

const PickerItem = ({label, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
};

export default PickerItem;

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

