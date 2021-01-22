import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import DevicesScreen from "../screens/DevicesScreen";
import DeviceDetailScreen from "../screens/DeviceDetailScreen.js";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Devices"
          component={DevicesScreen}
          options={{ title: "Devices screen" }}
        ></Stack.Screen>
        <Stack.Screen
          name="Details"
          component={DeviceDetailScreen}
          options={{ title: "Detail screen" }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

// {
//   Home: {
//     screen: HomeScreen,
//     navigationOptions: { title: "Home" },
//   },
//   Devices: {
//     screen: DevicesScreen,
//     navigationOption: { title: "Devices" },
//   },
//   DevicesDetails: {
//     screen: DevicesDetailScreen,
//     navigationOptions: { title: "Details" },
//   },
// }
