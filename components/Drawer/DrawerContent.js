import {
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { View, StyleSheet } from "react-native";
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
