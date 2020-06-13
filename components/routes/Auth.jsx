import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AppInput from '../common/AppInput';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Auth = ({ navigation, route }) => {
    const { auth } = route.params;
    const [authenticate, setAuthenticate] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const toggleAuth = () => {
        setAuthenticate(!authenticate);
    }

    const onInputChange = name => text => {
        setFormData({ ...formData, [name]: text });
    }

    const onSubmit = () => {
        navigation.navigate('Home');
    }

    useEffect(() => {
        if (auth === 'SignUp') {
            setAuthenticate(false);
        }
    }, [])

    const { name, email, password } = formData;
    const screen = authenticate ? "Login" : "Sign Up";
    return (
        <View style={s.container}>
            <View style={s.login}>
                <Text style={s.loginText}>{screen}</Text>
            </View>
            {!authenticate
                ? (
                    <View style={{ flex: 1 }}>
                        <Text>Name</Text>
                        <AppInput value={name} handleTextChange={onInputChange('name')} />
                    </View>
                )
                : null
            }
            <View style={{ flex: 1 }}>
                <Text>Email</Text>
                <AppInput value={email} handleTextChange={onInputChange('email')} />
            </View>
            <View style={{ flex: 1 }}>
                <Text>Password</Text>
                <AppInput value={password} handleTextChange={onInputChange('password')} />
            </View>
            <View style={{ flex: 1 }}>
                <Button title={screen} onPress={onSubmit} />
            </View>
            <View style={s.suggestion}>
                <Text>{authenticate ? "Don't have an Account?" : "Already have an Account?"}</Text>
                <TouchableOpacity activeOpacity={1} onPress={toggleAuth}>
                    <Text style={s.suggestionText}>{authenticate ? "Sign Up" : "Login"}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Auth;

const s = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    login: {
        flex: 1,
        justifyContent: 'center'
    },
    loginText: {
        fontSize: 25,
    },
    suggestion: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    suggestionText: {
        fontSize: 15,
        textDecorationLine: 'underline',
        marginLeft: 12
    }
})