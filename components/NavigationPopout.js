import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { render } from "react-dom";
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
    console.log(props.show);
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.onShow}
            onRequestClose={() => {
                props.hide();
            }}
        >
            <View style={styles.container}>
                <Text>test</Text>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1c2731",
        height: 60,
        // borderRadius: 5,
        marginTop: 90,
        marginLeft: 10,
        marginRight: 10,
    },
});

export default NavigationPopout;
