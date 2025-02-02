import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from '../../components/Post/styles'

const Post = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://picsum.photos/702' }} style={styles.image} />
      
      <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>

      <Text style={styles.description} numberOfLines={2}>
        Entire FLat. Pueroto de la cruz lrm lorem ipsum is simply dummy text for the
        description to add the description for the post description.Pueroto de la cruz lrm lorem ipsum 
      </Text>

      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$100</Text>
        <Text style={styles.newPrice}> $95 </Text>
        / night
      </Text>


      <Text style={styles.totalPrice}>$230 total</Text>
    </View>
  )
}

export default Post

