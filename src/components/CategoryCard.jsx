import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WIDTH, HEIGHT } from '../../constants';

const CategoryCard = ({ text }) => {
    return (
        <View style={s.card}>
            <View style={s.cardBody}>
                <Text style={s.cardText}>{text}</Text>
            </View>
        </View>
    )
}

export default CategoryCard;

const s = StyleSheet.create({
    card: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 15
    },
    cardBody: {
        backgroundColor: 'tomato',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        width: WIDTH / 4,
        height: HEIGHT / 12
    },
    cardText: {
        fontSize: 20,
        color: 'white'
    }
})