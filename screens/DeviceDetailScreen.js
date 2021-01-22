import React from "react";
import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";

function DeviceDetailScreen(props) {
  return (
    <SafeAreaView>
      <View>
        <Text>More Devices for you</Text>
        <Button
          title="Go Back"
          onPress={() => props.navigation.navigate("Devices")}
        ></Button>
      </View>
    </SafeAreaView>
  );
}

export default DeviceDetailScreen;
