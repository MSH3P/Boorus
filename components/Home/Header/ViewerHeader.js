import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import ArrowLeft from "../../../assets/icons/ArrowLeft";
import Tag from "../../../assets/icons/Tag";
import Save from "../../../assets/icons/Save";
const ViewerHeader = (props) => {
  const properties = [
    {
      style: {
        justifyContent: "center",
        paddingLeft: 6,
      },
      onpress: () => {
        props.navigation.goBack();
      },
      icon: <ArrowLeft />,
    },
    {
      style: { justifyContent: "center", marginLeft: "auto", paddingRight: 6 },
      onpress: () => {},
      icon: <Tag />,
    },
    {
      style: { justifyContent: "center", paddingRight: 6 },
      onpress: () => {},
      icon: <Save />,
    },
  ];
  return (
    <View style={styles.container}>
      {[
        ...properties.map((props, index) => {
          return (
            <View style={props.style} key={index}>
              <Pressable onPress={props.onpress}>{props.icon}</Pressable>
            </View>
          );
        }),
      ]}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#1c2731",
    height: 60,
  },
});

export default ViewerHeader;
