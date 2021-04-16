import React, { Component, version, useEffect } from "react";
import { Image, Text, View, TouchableOpacity, FlatList, Dimensions } from "react-native";
import { styles } from "../constants/Styles";

export default function FolderView(props) {
    const { navigation } = props;
    const { route } = props;

    const { title } = route.params;

    useEffect(() => {
        navigation.setOptions({headerTitle: title});
    });

    return (
        <View style={[styles.container, {justifyContent: 'flex-start'}]}>
            <TouchableOpacity
                style={[styles.button, {marginBottom: 13}]}
                onPress={() => navigation.navigate("TBD")}
            >
                <Text style={styles.buttonText}>Capture More</Text>
            </TouchableOpacity>
        </View>
    )
}