import React, { useState, useEffect, useRef } from "react";
import { ActivityIndicator } from "react-native";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { website, tag } from "../../../local/website";

const getContent = (search, page) => {
  const limit = 30;
  const url = `${website}/post/index.json?limit=${limit}&tags=${
    search || tag
  }&page=${page}`;

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
  const [page, setPage] = useState(1);
  const flatListRef = useRef(null);

  useEffect(() => {
    // Not a good solution
    // flatListRef isn't initialized on first render
    // We only need scrollToIndex when page > 1
    if (page > 1)
      flatListRef.current.scrollToIndex({ animated: true, index: 0 });

    getContent(props.search, 1).then((sifted) => {
      setPage(1);
      setData(sifted);
    });
  }, [props.search]);

  return (
    <FlatList
      onScrollToIndexFailed={() => {
        console.log("test");
      }}
      ref={flatListRef}
      data={data}
      numColumns={3}
      columnWrapperStyle={{
        flex: 1,
        justifyContent: "space-evenly",
        marginTop: 5,
      }}
      ListFooterComponent={
        <View>
          <ActivityIndicator size="small" color="white" />
        </View>
      }
      onEndReached={() => {
        getContent(props.search, page + 1).then((sifted) => {
          setPage(page + 1);
          setData(data.concat(sifted));
        });
      }}
      onEndReachedThreshold={0.5}
      renderItem={({ item }) => {
        return (
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
        );
      }}
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
