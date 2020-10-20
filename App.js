import "react-native-gesture-handler";
import * as React from "react";
import { View, Text } from "react-native";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";

import Content from "./components/Content.js";
import Footer from "./components/Footer.js";
import Navigation from "./components/Navigation.js";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Main = () => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                flexDirection: "column",
                backgroundColor: "#0E1419",
            }}
        >
            <Navigation />
            <Content />
            <Footer />
        </SafeAreaView>
    );
};

const App = () => {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor="#1c2731" barStyle="light-content" />
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Main" component={Main} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default App;
