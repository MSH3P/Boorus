import React, { useState } from "react";
import {} from "react-navigation";
import { SafeAreaView, StyleSheet, StatusBar, View, Text } from "react-native";

const Viewer = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "red" }}>test</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "red",
    backgroundColor: "#0E1419",
  },
});

export default Viewer;
