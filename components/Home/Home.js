import React, { useState } from "react";
import {} from "react-navigation";
import { SafeAreaView, StyleSheet } from "react-native";

import Content from "./Content/Content";
import Footer from "./Footer/Footer/";
import Navigation from "./Navigation/Navigation";

const Home = ({ navigation }) => {
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Navigation navigation={navigation} setSearch={setSearch} />
      <Content search={search} />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E1419",
  },
});

export default Home;
