import React, { useState } from "react";

import {} from "react-navigation";
import { SafeAreaView, StyleSheet, StatusBar, View, Text } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";

const Viewer = ({ route }) => {
  const { item } = route.params;

  // const extension = item.substring(item.lastIndexOf("."));

  return (
    <View style={styles.container}>
      <Video
        style={styles.video}
        source={{
          uri: item,
        }}
        useNativeControls
        resizeMode="contain"
        shouldPlay={true}
      />
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
});

export default Viewer;
