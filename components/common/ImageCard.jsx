import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";


const ImageCard = ({ image, text, price, index, navigation }) => {

    const handleDetail = () => {
        navigation.navigate('ProductDetail', { index });
    }

    return (
        <TouchableOpacity activeOpacity={0.9} style={s.card} onPress={handleDetail}>
            <View style={s.cardBody}>
                <View>
                    <Image source={image} style={s.cardImage} />
                </View>
                <View style={s.cardFooter}>
                    <Text>{price}</Text>
                    <Text style={s.cardText}>{text}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default ImageCard;

const s = StyleSheet.create({
    card: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 12
    },
    cardBody: {
        backgroundColor: "#eee",
        borderRadius: 3,
        overflow: "hidden"
    },
    cardImage: {
        height: 130,
        width: 150
    },
    cardFooter: {
        padding: 7,
        width: 150
    },
    cardText: {
        color: "#777",
        paddingTop: 3
    }
})