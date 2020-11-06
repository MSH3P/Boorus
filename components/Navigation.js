import React, { useState } from "react";
import { Pressable, StyleSheet, View, TextInput } from "react-native";
import Menu from "../assets/icons/Menu";
import MoreVertical from "../assets/icons/MoreVertical";
import NavigationPopout from "./NavigationPopout";

const Navigation = (props) => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      <NavigationPopout show={{ show, setShow }} />
      <View style={styles.inner}>
        <Pressable
          onPress={() => {
            props.navigation.openDrawer();
          }}
          android_ripple={{
            color: "blue",
            borderless: "false",
          }}
          style={styles.pressable}
        >
          <Menu />
        </Pressable>
        <TextInput
          placeholder="Search..."
          placeholderTextColor="#6F6B68"
          style={styles.textInput}
        />
        <Pressable
          onPress={() => {
            setShow(true);
          }}
          android_ripple={{
            color: "blue",
            borderless: "false",
          }}
          style={styles.pressable}
        >
          <MoreVertical />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c2731",
    height: 60,
  },
  pressable: { justifyContent: "center" },
  inner: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    borderRadius: 12,
    padding: 6,
  },
  textInput: {
    width: "85%",
    color: "white",
    fontSize: 20,
    borderRadius: 12,
    padding: 10,
    marginLeft: 5,
    marginRight: 0,
  },
});

export default Navigation;
