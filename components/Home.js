import React from "react";
import {} from "react-navigation";
import { View, SafeAreaView, StyleSheet } from "react-native";
import Content from "./Content.js";
import Footer from "./Footer.js";
import Navigation from "./Navigation.js";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation navigation={navigation} />
      <Content />
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
