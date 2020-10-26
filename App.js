import "react-native-gesture-handler";
import * as React from "react";
import { StatusBar, View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";
import Home from "./components/Home.js";
import DrawerContent from "./components/Drawer/DrawerContent.js";

import EyeOff from "./assets/icons/EyeOff.js";
import User from "./assets/icons/User.js";
import Star from "./assets/icons/Star.js";
import Rewind from "./assets/icons/Rewind.js";

const Drawer = createDrawerNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor="#1c2731" barStyle="light-content" />
            <Drawer.Navigator
                drawerStyle={{
                    backgroundColor: "#1c2731",
                    width: "65%",
                }}
                drawerContent={(props) => <DrawerContent {...props} />}
            >
                <Drawer.Screen
                    options={{
                        drawerIcon: () => {
                            return <User />;
                        },
                    }}
                    name="Account"
                    component={Home}
                ></Drawer.Screen>
                <Drawer.Screen
                    options={{
                        drawerIcon: () => {
                            return <Star />;
                        },
                    }}
                    name="Favorites"
                    component={Home}
                ></Drawer.Screen>
                <Drawer.Screen
                    options={{
                        drawerIcon: () => {
                            return <Rewind />;
                        },
                    }}
                    name="History"
                    component={Home}
                ></Drawer.Screen>
                <Drawer.Screen
                    options={{
                        drawerIcon: () => {
                            return <EyeOff />;
                        },
                    }}
                    name="Tag Blacklist"
                    component={Home}
                ></Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer>
    );
};
export default App;
