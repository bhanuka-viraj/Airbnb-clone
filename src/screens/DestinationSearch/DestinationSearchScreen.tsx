import { View, Text, TextInput, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import search from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const DestinationSearchScreen = () => {
    const [inputText, setInputText] = useState('');

    const navigation = useNavigation<any>();

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
                    <Pressable style={styles.row} onPress={()=>navigation.navigate('Guests' as never)}>
                        <View style={styles.iconContainer}>
                            <Entypo name='location-pin' size={30} />
                        </View>
                        <Text style={styles.locationText}> {item.description}</Text>
                    </Pressable>
                )}
            />
        </View>
    )
}

export default DestinationSearchScreen;

