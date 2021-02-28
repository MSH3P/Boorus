import React, { useState } from "react";

import {} from "react-navigation";
import { StyleSheet, View, Image } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import MediaContainer from "./Media/MediaContainer";
const Viewer = ({ route }) => {
  return (
    <View style={styles.container}>
      <MediaContainer route={route} />
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
  video: {
    alignSelf: "center",
    width: "100%",
    height: "100%",
  },
  image: {
    alignSelf: "center",
    width: "100%",
    height: "100%",
  },
});

export default Viewer;
