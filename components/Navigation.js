import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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
import NavigationPopout from "./NavigationPopout";

const Navigation = () => {
    const [show, setShow] = useState(false);
    const hide = () => {
        setShow(false);
    };
    return (
        <View style={styles.container}>
            <NavigationPopout show={show} hide={hide} />
            <View
                style={{
                    flex: 1,
                    flexDirection: "row",
                    flexWrap: "nowrap",

                    borderRadius: 12,

                    padding: 6,
                    // borderColor: "#185DC6",
                }}
            >
                <Pressable
                    onPress={() => {}}
                    android_ripple={{
                        color: "blue",
                        borderless: "false",
                    }}
                    style={{ justifyContent: "center" }}
                >
                    <Menu />
                </Pressable>
                <TextInput
                    placeholder="Search..."
                    placeholderTextColor="#6F6B68"
                    style={styles.textInput}
                ></TextInput>
                <Pressable
                    onPress={() => {
                        setShow(true);
                    }}
                    android_ripple={{
                        color: "blue",
                        borderless: "false",
                    }}
                    style={{ justifyContent: "center" }}
                >
                    <MoreVertical />
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1c2731",
        height: 60,
    },
    textInput: {
        width: "85%",
        color: "white",
        fontSize: 20,
        borderRadius: 12,
        padding: 10,
        marginLeft: 5,
        marginRight: 0,
    },
});

export default Navigation;
