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
    ScrollView,
} from "react-native";
import Menu from "../assets/icons/Menu";
import MoreVertical from "../assets/icons/MoreVertical";

const Content = () => {
    return <ScrollView></ScrollView>;
};

const styles = StyleSheet.create({
    container: {
        height: 10,
    },
    textInput: {
        width: "80%",
        backgroundColor: "#404040",
        borderRadius: 12,
        padding: 10,
        marginLeft: 0,
        marginRight: 10,
    },
});

export default Content;
