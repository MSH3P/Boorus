import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, Pressable } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { website, tag } from "../../../local/website";

const getContent = (search) => {
  const limit = 30;
  const url = `${website}/post/index.json?limit=${limit}&tags=${search || tag}`;

  return fetch(url)
    .then((response) => response.json())
    .then((json) => {
      return json.map((objects) => {
        return {
          key: objects.id,
          thumbnail: objects.preview_url,
          source_image: objects.file_url,
          source_width: objects.jpeg_width,
          source_height: objects.jpeg_height,
        };
      });
    })
    .catch((error) => {
      console.log("getContent error: " + error);
    });
};

const Content = (props) => {
  const [data, setData] = useState("");

  useEffect(() => {
    getContent(props.search).then((sifted) => {
      setData(sifted);
    });
  }, [props.search]);

  return (
    <FlatList
      data={data}
      numColumns={3}
      columnWrapperStyle={{
        flex: 1,
        justifyContent: "space-evenly",
        marginTop: 5,
      }}
      renderItem={({ item }) => (
        <View
          style={{
            height: 150,
            width: 150,
            backgroundColor: "#1c2731",
            borderRadius: 10,
            marginBottom: 7,
          }}
          key={item.key}
        >
          <Pressable
            onPress={() =>
              props.navigation.navigate("Viewer", {
                item: item.source_image,
                width: item.source_width,
                height: item.source_height,
              })
            }
          >
            <Image style={styles.viewBox} source={{ uri: item.thumbnail }} />
          </Pressable>
        </View>
      )}
    />
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
  viewBox: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    backgroundColor: "#1c2731",
    borderRadius: 10,
    marginBottom: 5,
  },
  imageBox: {
    marginLeft: "auto",
    marginRight: "auto",
    height: 150,
    width: 150,
  },
});

export default Content;
