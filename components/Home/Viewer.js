import React, { useState } from "react";
import {} from "react-navigation";
import { SafeAreaView, StyleSheet, StatusBar, View, Text } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import Navigation from "./Header/Navigation";
const Stack = createStackNavigator();

const Viewer = ({ route }) => {
  return (
    <View>
      <Text>{JSON.stringify(route.params)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E1419",
  },
});

export default Viewer;
