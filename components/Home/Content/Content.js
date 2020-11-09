import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, Text, View, Image } from "react-native";

const getContent = (search) => {
  const limit = 2;
  const url = `/post/index.json?limit=${limit}&tags=${search}`;
  const tags = "smell";

  return fetch(url)
    .then((response) => response.json())
    .then((json) => {
      return json.map((objects) => {
        return { thumbnail: objects.preview_url };
      });
    })
    .catch((error) => {
      console.log("getContent error");
    });
};

const Content = (props) => {
  const [data, setData] = useState("");
  // useEffect(() => {
  //   getContent(props.search).then((sifted) => {
  //     const ContentItems = sifted.map((object) => {
  //       return <View></View>;
  //     });
  //   });
  // }, [props.search]);

  return (
    <ScrollView style={{ margin: 5 }}>
      <View
        style={{
          height: 150,
          width: 150,
          overflow: "hidden",
          backgroundColor: "cyan",
          borderRadius: 10,
        }}
      >
        <Image
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            height: 150,
            width: 150,
          }}
          source={{ uri: data.preview_url }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 10,
  },
  textInput: {
    backgroundColor: "#404040",
    borderRadius: 12,
    padding: 10,
    marginLeft: 0,
    marginRight: 10,
  },
});

export default Content;
