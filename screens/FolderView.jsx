import React, { Component, version, useEffect, useState } from "react";
import { Image, Text, View, TouchableOpacity, FlatList, Dimensions } from "react-native";
import { styles } from "../constants/Styles";
import * as MediaLibrary from 'expo-media-library';

export default function FolderView(props) {
    const { navigation } = props;
    const { route } = props;

    const { title } = route.params;

    useEffect(() => {
        navigation.setOptions({headerTitle: title});
    });

    const [hasCameraRollPermission, setHasCameraRollPermission] = useState(false);

    useEffect(() => {
        (async () => {
            const rollPermissions = await MediaLibrary.requestPermissionsAsync();
            setHasCameraRollPermission(rollPermissions.status === 'granted');
            // console.log("setting camera roll permission to ", rollPermissions.status === 'granted')
        })();
    }, []);

    const [albumAssets, setAlbumAssets] = useState(null);

    useEffect(() => {
        (async () => {
            const album = await MediaLibrary.getAlbumAsync(title);
            // console.log(album);
            const res = await MediaLibrary.getAssetsAsync({ album });
            setAlbumAssets(res.assets);
            // console.log(albumAssets)
        })();
    }, []);

    const renderItem = ({ item }) => (
        <Image 
            style={[styles.galleryFolder, {height: 300, width: 250}]} 
            source={item} />
      )
    

    return (
        <View style={[styles.container, {justifyContent: 'flex-start'}]}>
            <Text style={[styles.bodyText, {marginTop: 10, marginBottom: 10}]}>
                {"Compare to example."}
            </Text>
            <View style={[styles.galleryFolder, {height: 600, width: 325}]}>
                <FlatList 
                    data={albumAssets} 
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={1}
                    scrollEnabled={true}
                />
                <Text style={styles.bodyText}>Your Image</Text>
            </View>
            
            {/* <View style={[styles.galleryFolder, {height: 200, width: 300}]}>
                <Text style={styles.bodyText}>Example Image</Text>
            </View>
            <TouchableOpacity
                style={[styles.button, {marginTop: 10}]}
                onPress={() => navigation.navigate("TBD")}
            >
                <Text style={styles.buttonText}>Capture More</Text>
            </TouchableOpacity> */}
        </View>
    )
}