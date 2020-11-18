import "react-native-gesture-handler";
import * as React from "react";
import { StatusBar, View, Text, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import DrawerContent from "./components/Drawer/DrawerContent";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
import SettingsComponent from "./components/Settings/SettingsComponent";
import AboutComponent from "./components/About/AboutComponent";
import Home from "./components/Home/Page";
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#1c2731" barStyle="light-content" />
      <Drawer.Navigator
        drawerStyle={styles.drawerStyle}
        drawerContent={(props) => <DrawerContent {...props} />}
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen name="Account" component={Home} />
        <Drawer.Screen name="Favorites" component={Home} />
        <Drawer.Screen name="History" component={Home} />
        <Drawer.Screen name="Tag Blacklist" component={Home} />
        <Drawer.Screen name="Settings" component={SettingsComponent} />
        <Drawer.Screen name="About" component={AboutComponent} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  drawerStyle: { backgroundColor: "#1c2731", width: "65%" },
  contents: {},
});

export default App;
