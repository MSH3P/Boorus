import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Modal,
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback,
} from "react-native";

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
                style={styles.opacity}
            >
                <TouchableWithoutFeedback>
                    <View style={styles.container}>
                        <View>
                            <Text style={{ color: "white" }}>Modal</Text>
                        </View>
                        <View style={styles.inner}>
                            <TouchableHighlight
                                style={styles.highlight}
                                onPress={() => {}}
                            >
                                <Text>OK</Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={styles.highlight}
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
    inner: {
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-evenly",
    },
    opacity: {
        backgroundColor: "transparent",
        height: "100%",
        height: "100%",
    },
    highlight: {
        backgroundColor: "red",
        borderRadius: 5,
        padding: 5,
    },
    contents: {
        padding: 10,
    },
});

export default NavigationPopout;
