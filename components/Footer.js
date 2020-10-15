import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    Pressable,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Image,
} from "react-native";
import Menu from "../assets/icons/Menu";
import MoreVertical from "../assets/icons/MoreVertical";

const Footer = () => {
    return (
        <View style={styles.container}>
            <Text style={{ color: "white" }}></Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1c2731",
        height: 60,
    },
});

export default Footer;
