import React, { useState } from "react";

import {} from "react-navigation";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Text,
  Image,
} from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";

const Viewer = ({ route }) => {
  const { item, width, height } = route.params;

  const extension = item.substring(item.lastIndexOf("."));

  // image types
  if (extension == ".png" || extension == ".jpg" || extension == ".gif") {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: item }}
          resizeMode="contain"
        />
      </View>
    );
  }
  // video
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
  image: {
    alignSelf: "center",
    width: "100%",
    height: "100%",
  },
});

export default Viewer;
