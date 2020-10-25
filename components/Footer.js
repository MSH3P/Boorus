import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Footer = () => {
    return (
        <View style={styles.container}>
            <Text style={{ color: "white" }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1c2731",
        height: 50,
    },
});

export default Footer;
