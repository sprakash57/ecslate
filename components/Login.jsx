import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import AppInput from './common/AppInput';

const Login = ({ navigation }) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const onInputChange = name => text => {
        setFormData({ ...formData, [name]: text })
    }

    const onSubmit = () => {
        navigation.navigate('Home');
    }

    const { email, password } = formData;
    return (
        <View>
            <View>
                <Text>Login</Text>
            </View>
            <View>
                <Text>Email</Text>
                <AppInput value={email} handleTextChange={onInputChange('email')} />
            </View>
            <View>
                <Text>Password</Text>
                <AppInput value={password} handleTextChange={onInputChange('password')} />
            </View>
            <View>
                <Button title='Login' onPress={onSubmit} />
            </View>
        </View>
    )
}

export default Login;