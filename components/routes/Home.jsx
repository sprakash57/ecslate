import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import AppInput from '../common/AppInput';
import ImageCard from '../common/ImageCard';
import Links from '../common/Links';
import CategoryCard from '../common/CategoryCard';
import { men1, men2, woman2, woman3, men4, woman4 } from '../../constants';

const Home = ({ navigation }) => {

    const [search, setSearch] = useState('');

    const handleClick = screen => () => {
        navigation.navigate(screen);
    }

    return (
        <View style={s.container}>
            <View>
                <AppInput placeholder='Search' value={search} handleTextChange={text => setSearch(text)} />
            </View>
            <View style={s.header}>
                <Text style={s.largeText}>Category</Text>
                <Text>See all</Text>
            </View>
            <ScrollView horizontal>
                <CategoryCard text='Man' />
                <CategoryCard text='Woman' />
                <CategoryCard text='Kids' />
            </ScrollView>
            <View style={s.header}>
                <Text style={s.largeText}>Featured</Text>
                <Links title='See all' onClick={handleClick('Featured')} />
            </View>
            <ScrollView horizontal>
                <ImageCard image={men1} text='Polo' price='$35' index={0} navigation={navigation} />
                <ImageCard image={men2} text='Shirt' price='$45' index={1} navigation={navigation} />
                <ImageCard image={woman4} text='Black top' price='$85' index={7} navigation={navigation} />
            </ScrollView>
            <View style={s.header}>
                <Text style={s.largeText}>Best Sell</Text>
                <Links title='See all' onClick={handleClick('BestSell')} />
            </View>
            <ScrollView horizontal>
                <ImageCard image={woman2} text='Black off shoulder' price='$50' index={5} navigation={navigation} />
                <ImageCard image={woman3} text='Brown top' price='$35' index={6} navigation={navigation} />
                <ImageCard image={men4} text='Wedding' price='$61' index={3} navigation={navigation} />
            </ScrollView>
        </View>
    )
}

export default Home;

const s = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 5
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    largeText: {
        fontSize: 20
    }
})
