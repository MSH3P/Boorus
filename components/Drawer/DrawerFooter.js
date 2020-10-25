import { DrawerItem } from "@react-navigation/drawer";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Settings from "../../assets/icons/Settings.js";
import Info from "../../assets/icons/Info.js";
const DrawerFooter = () => {
    return (
        <View Drawer style={styles.contents}>
            <DrawerItem
                icon={() => {
                    return <Settings />;
                }}
                labelStyle={styles.labelstyle}
                label="Settings"
            ></DrawerItem>
            <DrawerItem
                icon={() => {
                    return <Info />;
                }}
                labelStyle={styles.labelstyle}
                label="About"
            ></DrawerItem>
        </View>
    );
};
const styles = StyleSheet.create({
    contents: { borderColor: "#6F6B68", borderTopWidth: 1 },
    labelstyle: { color: "white" },
});
export default DrawerFooter;
