import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const DevicesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>TESLA</Text>
      <Button
        title="press to see your devices"
        onPress={() => {
          props.navigation.navigate("Details");
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    color: "white",
  },
  text: {
    color: "white",
    fontSize: 40,
  },
});

export default DevicesScreen;
