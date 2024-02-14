import {
  Alert,
  Button,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const App = () => {
  return (
    <View>
      <Text>App</Text>
      {/* //alert */}
      {/* <Button title="Button" onPress={() => alert('Button Tapped')} /> */}

      {/* Alert */}
      {/* <Button
          title="Button"
          onPress={() =>
            Alert.alert('My Title', 'My Message', [
              {text: 'Yes', onPress: () => console.log('Yes')},
              {text: 'No', onPress: () => console.log('No')},
            ])
          }
        /> */}

      {/* PROMPT  */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    // PLATFORM SPECIFIC PROPERTIES
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
