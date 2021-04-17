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
            <Text style={[styles.bodyText, {marginTop: 10, marginBottom: 10}]}>
                {"Compare to example."}
            </Text>
            <View style={[styles.galleryFolder, {height: 200, width: 300}]}>
                <Text style={styles.bodyText}>Your Image</Text>
            </View>
            <View style={[styles.galleryFolder, {height: 200, width: 300}]}>
                <Text style={styles.bodyText}>Example Image</Text>
            </View>
            <TouchableOpacity
                style={[styles.button, {marginTop: 10}]}
                onPress={() => navigation.navigate("TBD")}
            >
                <Text style={styles.buttonText}>Capture More</Text>
            </TouchableOpacity>
        </View>
    )
}