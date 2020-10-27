import "react-native-gesture-handler";
import * as React from "react";
import { StatusBar, View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerComponent from "./components/Drawer/DrawerComponent";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#1c2731" barStyle="light-content" />
      <DrawerComponent />
      {/* <Stack.Navigator></Stack.Navigator> */}
    </NavigationContainer>
  );
};
export default App;
