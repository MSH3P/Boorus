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
    Modal,
} from "react-native";
import Menu from "../assets/icons/Menu";
import MoreVertical from "../assets/icons/MoreVertical";

const NavigationPopout = (props) => {
    return (
        <Modal animationType="slide" transparent={props.sh} visible={false}>
            <View>
                <Text>test</Text>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        height: 60,
    },
});

export default NavigationPopout;
