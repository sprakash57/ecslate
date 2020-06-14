import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const AppInput = ({ value, handleTextChange, placeholder }) => {

    const onInputMeal = inputText => {
        handleTextChange(inputText);
    }

    return (
        <TextInput
            style={s.input}
            value={value}
            onChangeText={onInputMeal}
            autoCapitalize='words'
            placeholder={placeholder}
        />
    )
}

export default AppInput;

const s = StyleSheet.create({
    input: {
        elevation: 2,
        marginVertical: 5,
        borderRadius: 1,
        paddingLeft: 5
    }
})
