import React from "react";
import {} from "react-native";

import Home from "../Home.js";
import User from "../../assets/icons/User.js";
import Star from "../../assets/icons/Star.js";
import Rewind from "../../assets/icons/Rewind.js";
import EyeOff from "../../assets/icons/EyeOff.js";
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "./DrawerContent.js";

const Drawer = createDrawerNavigator();

const DrawerComponent = () => {
  const Icons = {
    Account: () => {
      return <User />;
    },
    Favorite: () => {
      return <Star />;
    },
    History: () => {
      return <Rewind />;
    },
    Blacklist: () => {
      return <EyeOff />;
    },
  };

  return (
    <Drawer.Navigator
      drawerStyle={styles.drawerStyle}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        options={{
          drawerIcon: () => {
            return <Icons.Account />;
          },
        }}
        name="Account"
        component={Home}
      />

      <Drawer.Screen
        options={{
          drawerIcon: () => {
            return <Icons.Favorite />;
          },
        }}
        name="Favorites"
        component={Home}
      />

      <Drawer.Screen
        options={{
          drawerIcon: () => {
            return <Icons.History />;
          },
        }}
        name="History"
        component={Home}
      />

      <Drawer.Screen
        options={{
          drawerIcon: () => {
            return <Icons.Blacklist />;
          },
        }}
        name="Tag Blacklist"
        component={Home}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerStyle: { backgroundColor: "#1c2731", width: "65%" },
  contents: {},
});
export default DrawerComponent;
