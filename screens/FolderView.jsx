import React, { useEffect, useState } from "react";
import { Image, Text, View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { styles } from "../constants/Styles";
import * as MediaLibrary from 'expo-media-library';
import Carousel, { Pagination } from "react-native-snap-carousel";

export default function FolderView(props) {
    const { navigation } = props;
    const { route } = props;

    const { title } = route.params;

    const imageWidth = 325;
    const imageHeight = 250;

    useEffect(() => {
        navigation.setOptions({headerTitle: title});
    });

    const [hasCameraRollPermission, setHasCameraRollPermission] = useState(false);

    useEffect(() => {
        (async () => {
            const rollPermissions = await MediaLibrary.requestPermissionsAsync();
            setHasCameraRollPermission(rollPermissions.status === 'granted');
        })();
    }, []);

    const [albumAssets, setAlbumAssets] = useState(null);

    useEffect(() => {
        (async () => {
            const album = await MediaLibrary.getAlbumAsync(title);
            const res = await MediaLibrary.getAssetsAsync({ album });
            setAlbumAssets(res.assets);
        })();
    }, []);

    const renderItem = ({ item }) => (
        <Image 
            style={[styles.galleryFolder, folderStyles.image]} 
            source={item} />
    )
    
    return (
        <View style={[styles.container, {justifyContent: 'flex-start'}]}>
            <Text style={[styles.bodyText, folderStyles.text]}>
                {"Compare to example."}
            </Text>
            <Text style={[styles.bodyText, folderStyles.sectionText]}>Your Image</Text> 
            <Carousel
                data={albumAssets}
                renderItem={renderItem}
                sliderWidth={imageWidth}
                sliderHeight={imageHeight}
                itemWidth={imageWidth}
                layout={'stack'}
                layoutCardOffset={294}
            />
            <Text style={[styles.bodyText, folderStyles.sectionText]}>Example Image</Text>
            <View style={[styles.galleryFolder, folderStyles.image]}></View>
            <TouchableOpacity
                style={[styles.button, folderStyles.sectionText, {marginBottom: 25}]}
                onPress={() => navigation.navigate("TBD")}
            >
                <Text style={styles.buttonText}>Capture More</Text>
            </TouchableOpacity>
        </View>
    )
}

const folderStyles = StyleSheet.create({
    text: {
        marginTop: 10, 
        marginBottom: 0
    },
    sectionText: {
        marginTop: 10, 
        marginBottom: 10
    },
    image: {
        height: 250, 
        width: 325, 
        margin: 0, 
        padding: 0, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})