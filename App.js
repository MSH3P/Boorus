import "react-native-gesture-handler";
import * as React from "react";
import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./components/Home.js";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor="#1c2731" barStyle="light-content" />
            <Drawer.Navigator initialRouteName="Main">
                <Drawer.Screen name="Home" component={Home}></Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer>
    );
};
export default App;
