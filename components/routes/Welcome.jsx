import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { WIDTH, HEIGHT, shop } from '../../constants';

const Welcome = ({ navigation }) => {

    const handleNavigation = from => () => {
        navigation.navigate(from)
    }

    return (
        <View style={s.container}>
            <View>
                <Text>Welcome to Bolt</Text>
                <Text style={s.center}>Explore us</Text>
            </View>
            <View>
                <Image style={s.imgSize} source={shop} />
            </View>
            <View style={s.marginB}>
                <Button title='Login' onPress={handleNavigation('Login')} />
                <Button title='Signup' onPress={handleNavigation('Signup')} />
            </View>
        </View>
    )
}

export default Welcome;

const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    center: {
        textAlign: 'center'
    },
    imgSize: {
        height: HEIGHT / 2,
        width: WIDTH
    },
    marginB: {
        flex: 0.5,
        justifyContent: 'space-around'
    }
})