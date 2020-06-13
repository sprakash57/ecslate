import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Links = ({ title, onClick }) => {
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => onClick()}
        >
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

export default Links;