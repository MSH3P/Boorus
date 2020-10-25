import {
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Directions } from "react-native-gesture-handler";
import DrawerFooter from "./DrawerFooter";
import DrawerHeader from "./DrawerHeader";

const DrawerContent = (props) => {
    return (
        <View style={styles.container}>
            <DrawerHeader />
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} labelStyle={styles.itemlist} />
            </DrawerContentScrollView>
            <DrawerFooter />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
    },
    itemlist: {
        color: "white",
    },
});
export default DrawerContent;
