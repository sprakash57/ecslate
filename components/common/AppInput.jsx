import React from 'react';
import { TextInput } from 'react-native';

const AppInput = ({ value, handleTextChange }) => {
    const onInputMeal = inputText => {
        handleTextChange(inputText);
    }
    return (
        <TextInput
            value={value}
            onChangeText={onInputMeal}
            autoCapitalize='words'
        />
    )
}

export default AppInput;
