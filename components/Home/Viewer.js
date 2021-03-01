import React, { useState } from "react";

import {} from "react-navigation";
import { StyleSheet, View } from "react-native";
import MediaContainer from "./Media/MediaContainer";
import ViewerFooter from "./Footer/ViewerFooter";
import ViewerHeader from "./Header/ViewerHeader";
const Viewer = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <ViewerHeader navigation={navigation} />
      <MediaContainer route={route} />
      <ViewerFooter />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "red",
    alignContent: "center",
    backgroundColor: "#0E1419",
  },
});

export default Viewer;
