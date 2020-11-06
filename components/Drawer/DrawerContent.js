import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { View, StyleSheet } from "react-native";

import User from "../../assets/icons/User.js";
import Star from "../../assets/icons/Star.js";
import Rewind from "../../assets/icons/Rewind.js";
import EyeOff from "../../assets/icons/EyeOff.js";
import Settings from "../../assets/icons/Settings.js";
import Info from "../../assets/icons/Info.js";
import { DrawerItem } from "@react-navigation/drawer";
const DrawerContent = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          label="Account"
          labelStyle={{ color: "white" }}
          icon={() => {
            return <User />;
          }}
        />
        <DrawerItem
          label="Favorites"
          labelStyle={{ color: "white" }}
          icon={() => {
            return <Star />;
          }}
        />
        <DrawerItem
          label="History"
          labelStyle={{ color: "white" }}
          icon={() => {
            return <Rewind />;
          }}
        />
        <DrawerItem
          label="Tag Blacklist"
          labelStyle={{ color: "white" }}
          icon={() => {
            return <EyeOff />;
          }}
        />
      </DrawerContentScrollView>
      <View style={styles.footer}>
        <DrawerItem
          label="Settings"
          labelStyle={{ color: "white" }}
          icon={() => {
            return <Settings />;
          }}
          onPress={() => {
            props.navigation.navigate("Settings");
          }}
        />
        <DrawerItem
          label="About"
          labelStyle={{ color: "white" }}
          icon={() => {
            return <Info />;
          }}
          onPress={() => {
            props.navigation.navigate("About");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: { borderColor: "#6F6B68", borderBottomWidth: 1, height: "10%" },
  container: {
    height: "100%",
  },
  itemlist: {
    color: "white",
  },
  footer: { borderColor: "#6F6B68", borderTopWidth: 1 },
});
export default DrawerContent;
