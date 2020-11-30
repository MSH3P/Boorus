import { createStackNavigator } from "@react-navigation/stack";
import Page from "./Page";
import Viewer from "./Viewer";
const Stack = createStackNavigator();
import "react-native-gesture-handler";
import * as React from "react";

const MainStackNavigator = (props) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Page" component={Page} />
      <Stack.Screen name="Viewer" component={Viewer} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
