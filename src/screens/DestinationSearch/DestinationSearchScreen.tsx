import { View, Text, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import search from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';

const DestinationSearchScreen = () => {
    const [inputText, setInputText] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Where are you going?'
                style={styles.textInput}
                value={inputText}
                onChangeText={setInputText}
            />

            <FlatList
                data={search}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Entypo name='location-pin' size={30} />
                        </View>
                        <Text style={styles.locationText}> {item.description}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default DestinationSearchScreen;
