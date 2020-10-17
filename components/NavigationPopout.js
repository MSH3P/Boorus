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
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback,
} from "react-native";
import Menu from "../assets/icons/Menu";
import MoreVertical from "../assets/icons/MoreVertical";

const NavigationPopout = (props) => {
    const show = props.show.show;
    const setShow = props.show.setShow;
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={show}
            onRequestClose={() => setShow(false)}
        >
            <TouchableOpacity
                onPress={() => {
                    setShow(false);
                }}
                style={{
                    backgroundColor: "transparent",
                    height: "100%",
                    height: "100%",
                }}
            >
                <TouchableWithoutFeedback>
                    <View style={styles.container}>
                        <View>
                            <Text style={{ color: "white" }}>Modal</Text>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                flexWrap: "nowrap",
                                justifyContent: "space-evenly",
                            }}
                        >
                            <TouchableHighlight
                                style={{
                                    backgroundColor: "red",
                                    borderRadius: 5,
                                    padding: 5,
                                }}
                                onPress={() => {}}
                            >
                                <Text>OK</Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={{
                                    backgroundColor: "red",
                                    borderRadius: 5,
                                    padding: 5,
                                }}
                                onPress={() => {
                                    setShow(false);
                                }}
                            >
                                <Text>CANCEL</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </TouchableOpacity>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1c2731",
        marginTop: 90,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        padding: 10,
    },
    contents: {
        padding: 10,
    },
});

export default NavigationPopout;
