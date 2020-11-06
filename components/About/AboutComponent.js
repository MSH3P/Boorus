const { Text, View } = require("react-native");
import React from "react";
import { Button, Pressable, StyleSheet } from "react-native";
import ArrowLeft from "../../assets/icons/ArrowLeft";
const AboutComponent = (props) => {
  return (
    <View style={styles.background}>
      <View
        style={{
          height: 60,
          backgroundColor: "#1c2731",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Pressable style={{ margin: 5 }} onPress={() => {}}>
          <ArrowLeft />
        </Pressable>
        <Text style={{ color: "white", fontSize: 25, marginLeft: 5 }}>
          About
        </Text>
      </View>
      <Text style={styles.text}>About goes here </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: { backgroundColor: "#0E1419", height: "100%" },
  text: { color: "white" },
});

export default AboutComponent;
