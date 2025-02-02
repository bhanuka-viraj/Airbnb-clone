import { ImageBackground, Pressable, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View>
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('Destination')}>
        <Fontisto name='search' size={20} color={'#f15454'} />
        <Text style={styles.searchButtonText}>Where are you going?</Text>
      </Pressable>

      <ImageBackground
        style={styles.image}
        source={require('../../../assets/images/wallpaper.jpg')}
        resizeMode='cover'>

        <Text style={styles.text}>Go Near</Text>

        <Pressable
          style={styles.button}
          onPress={() => console.log('Explore Nearby Stays')}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>

      </ImageBackground>
    </View>
  )
}

export default HomeScreen


