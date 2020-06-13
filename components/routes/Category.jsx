import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { DB, men1 } from '../../constants';
import ImageCard from '../common/ImageCard';

const Category = ({ route, navigation }) => {
    const { screen } = route.params;

    const renderCards = () => {
        let category = screen === 'Featured' ? 'featured' : 'bestSell';
        const list = DB.filter(item => item[category] === true);
        let items = [];
        for (let i = 0; i < list.length;) {
            items.push(
                <View key={i} style={{ flex: 1, flexDirection: 'row' }}>
                    <ImageCard
                        image={list[i].image}
                        text={list[i].title}
                        price={list[i].price}
                        index={list[i].id}
                        navigation={navigation}
                    />
                    <ImageCard
                        image={list[i + 1].image}
                        text={list[i + 1].title}
                        price={list[i + 1].price}
                        index={list[i + 1].id}
                        navigation={navigation}
                    />
                </View>
            )
            i += 2;
        }
        return items
    }

    return (
        <View style={{ flex: 1, paddingHorizontal: 5 }}>
            <View style={s.header}>
                <Text style={s.text}>{screen}</Text>
            </View>
            <ScrollView>
                {renderCards()}
            </ScrollView>
        </View>
    )
}

export default Category;

const s = StyleSheet.create({
    header: {
        marginVertical: 15
    },
    text: {
        fontSize: 24
    }
})