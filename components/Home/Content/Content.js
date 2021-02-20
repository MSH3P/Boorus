import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  Pressable,
  useWindowDimensions,
} from "react-native";
import { website, tag } from "../../../local/website";

const getContent = (search) => {
  const limit = 30;
  const url = `${website}/post/index.json?limit=${limit}&tags=${search || tag}`;

  return fetch(url)
    .then((response) => response.json())
    .then((json) => {
      return json.map((objects) => {
        return {
          thumbnail: objects.preview_url,
          id: objects.id,
          source_image: objects.file_url,
        };
      });
    })
    .catch((error) => {
      console.log("getContent error: " + error);
    });
};

const Content = (props) => {
  const [data, setData] = useState("");
  const window = useWindowDimensions();

  useEffect(() => {
    getContent(props.search).then((sifted) => {
      const ContentItems = sifted.map((object) => {
        return (
          <View
            style={{
              height: 150,
              width: 150,
              overflow: "hidden",
              backgroundColor: "#1c2731",
              borderRadius: 10,
              marginBottom: 5,
            }}
            key={object.id}
          >
            <Pressable
              onPress={() =>
                props.navigation.navigate("Viewer", {
                  item: object.source_image,
                })
              }
            >
              <Image
                style={styles.viewBox}
                source={{ uri: object.thumbnail }}
              />
            </Pressable>
          </View>
        );
      });
      setData(ContentItems);
    });
  }, [props.search]);
  return (
    <ScrollView>
      <View
        style={{
          margin: 5,
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        {data || []}
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
  viewBox: {
    height: 150,
    width: 150,
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
