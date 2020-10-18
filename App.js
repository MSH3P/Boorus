import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";

import Content from "./components/Content.js";
import Footer from "./components/Footer.js";
import Navigation from "./components/Navigation.js";
const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                backgroundColor="#1c2731"
                barStyle="light-content"
            ></StatusBar>
            <Navigation />
            <Content />
            <Footer />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#0E1419",
    },
});

export default App;
