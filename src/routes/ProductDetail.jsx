import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { DB } from '../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

const COLOR = ['Red', 'Black'];
const SIZE = ['S', 'M', 'L'];

const ProductDetail = ({ route }) => {
    const [showSize, setSize] = useState(true);
    const { index } = route.params;
    const { image, title, price, prevPrice, rating: { value, status }, reviews } = DB[index];

    const toggleSize = () => {
        setSize(true);
    }

    const toggleColor = () => {
        setSize(false);
    }

    return (
        <View style={s.container}>
            <View style={s.imageSection}>
                <Image source={image} />
            </View>
            <View style={s.title}>
                <Text style={s.titleText}>{title}</Text>
            </View>
            <View style={s.price}>
                <Text>{price}</Text>
                <Text style={s.prevPriceText}>{prevPrice}</Text>
            </View>
            <View style={s.rating}>
                <Text>{value}</Text>
                <Text style={{ marginLeft: 10 }}>{status}</Text>
                <Text style={{ marginLeft: 30 }}>{reviews} Reviews</Text>
            </View>
            <View style={s.description}>
                <Text>Description</Text>
                <Text style={{ textAlign: 'justify', marginTop: 2 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam sequi accusamus pariatur quos, voluptatibus minus expedita
                nisi a molestiae eligendi vero dolorum dignissimos ut, eveniet sint
                suscipit consequuntur sapiente eum.</Text>
            </View>
            <View style={s.selection}>
                <TouchableOpacity onPress={toggleSize}>
                    <Text>Select Size</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleColor}>
                    <Text>Select Color</Text>
                </TouchableOpacity>
            </View>
            <View style={s.size}>
                {showSize
                    ? SIZE.map((size, i) => <Text key={i}>{size}</Text>)
                    : COLOR.map((color, i) => <Text key={i}>{color}</Text>)
                }
            </View>
        </View>
    )
}

export default ProductDetail;

const s = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 5
    },
    imageSection: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    title: {
        flex: 1,
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 28
    },
    price: {
        flex: 0.5,
        flexDirection: 'row',
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    prevPriceText: {
        textDecorationLine: 'line-through',
        marginLeft: 10
    },
    rating: {
        flex: 0.5,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    selection: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    description: {
        flex: 1,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    size: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})