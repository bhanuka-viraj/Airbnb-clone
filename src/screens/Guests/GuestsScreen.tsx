import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'

const GuestsScreen = () => {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    return (
        <View>
            <View style={styles.row}>
                <View>
                    <Text style={{ fontWeight: 'bold' }}>Adults</Text>
                    <Text style={{ color: '#8d8d8d' }}>Ages 13 or above</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Pressable style={styles.button} onPress={() => adults > 0 && setAdults(adults - 1)}>
                        <Text style={styles.buttonText}>-</Text>
                    </Pressable>

                    <Text style={{ marginHorizontal: 20 }}>{adults}</Text>

                    <Pressable style={styles.button} onPress={() => setAdults(adults + 1)}>
                        <Text style={styles.buttonText}>+</Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.row}>
                <View>
                    <Text style={{ fontWeight: 'bold' }}>Children</Text>
                    <Text style={{ color: '#8d8d8d' }}>Ages 2 - 12</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Pressable style={styles.button} onPress={() => children > 0 && setChildren(children - 1)}>
                        <Text style={styles.buttonText}>-</Text>
                    </Pressable>

                    <Text style={{ marginHorizontal: 20 }}>{children}</Text>

                    <Pressable style={styles.button} onPress={() => setChildren(children + 1)}>
                        <Text style={styles.buttonText}>+</Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.row}>
                <View>
                    <Text style={{ fontWeight: 'bold' }}>Infants</Text>
                    <Text style={{ color: '#8d8d8d' }}>Ages under 2</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Pressable style={styles.button} onPress={() => infants > 0 && setInfants(infants - 1)}>
                        <Text style={styles.buttonText}>-</Text>
                    </Pressable>

                    <Text style={{ marginHorizontal: 20 }}>{infants}</Text>

                    <Pressable style={styles.button} onPress={() => setInfants(infants + 1)}>
                        <Text style={styles.buttonText}>+</Text>
                    </Pressable>
                </View>
            </View>

        </View>

    )
}

export default GuestsScreen