import React, { useEffect, useState } from "react";
import { Image, Text, View, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from "react-native";
import { styles } from "../constants/Styles";
import * as MediaLibrary from 'expo-media-library';
import Carousel, { Pagination } from "react-native-snap-carousel";
import Images from "../constants/Constants";

export default function FolderView(props) {
    const { navigation } = props;
    const { route } = props;

    const { title, example } = route.params;

    const imageWidth = Dimensions.get('window').width * 0.9;

    const [exampleImage, setExampleImage] = useState(null);

    useEffect(() => {
        navigation.setOptions({headerTitle: title});
        switch(title) {
            case 'Front':
                setExampleImage(Images.front);
                break;
            case 'Back':
                setExampleImage(Images.back);
                break;
            case 'Left Side':
                setExampleImage(Images.leftSide);
                break;
            case 'Right Side':
                setExampleImage(Images.rightSide);
                break;
            case "Worm's Eye":
                setExampleImage(Images.wormsEye);
                break;
            case 'Top':
                setExampleImage(Images.top);
                break;
            case 'Top Angled':
                setExampleImage(Images.topAngled);
                break;
        }
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
                        source={exampleImage} 
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
        borderRadius: 25,
        alignItems: 'center', 
        justifyContent: 'center'
    },
})