import React, { useEffect, useState } from "react";
import { Image, Text, View, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from "react-native";
import { styles } from "../constants/Styles";
import * as MediaLibrary from 'expo-media-library';
import Carousel, { Pagination } from "react-native-snap-carousel";
// import { ScrollView } from "react-native-gesture-handler";
import Images from "../constants/Constants";

export default function FolderView(props) {
    const { navigation } = props;
    const { route } = props;

    const { title, example } = route.params;
    
    // const exampleImage = require(example.str);

    const imageWidth = Dimensions.get('window').width * 0.9;

    useEffect(() => {
        navigation.setOptions({headerTitle: title});
    });

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
            style={folderStyles.image} 
            source={item} 
        />
    )
    
    return (
        <View style={[styles.container, {justifyContent: 'flex-start'}]}>
            <Text style={[styles.bodyText, folderStyles.text]}>
                {"Compare to example."}
            </Text>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <Text style={[styles.bodyText, folderStyles.sectionText]}>Your Image</Text> 
                <View style={folderStyles.image}>
                    <Carousel
                        data={albumAssets}
                        renderItem={renderItem}
                        sliderWidth={imageWidth}
                        itemWidth={imageWidth}
                        layout={'default'}
                        layoutCardOffset={0}
                    />
                </View>
                <Text style={[styles.bodyText, folderStyles.sectionText]}>Example Image</Text>
                <Text style={[styles.bodyText, folderStyles.sectionText]}>{example}</Text>
                <View style={folderStyles.image}>
                    <Image 
                        style={folderStyles.image}
                        source={Images.front} 
                    ></Image>
                </View>
            </ScrollView>
            <TouchableOpacity
                style={[styles.button, folderStyles.sectionText, {marginBottom: 25}]}
                onPress={() => navigation.navigate("Camera")}
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
        height: 400,
        width: Dimensions.get('window').width * 0.9, 
        marginBottom: 10, 
        // padding: 0, 
        borderRadius: 25,
        alignItems: 'center', 
        justifyContent: 'center'
    },
})