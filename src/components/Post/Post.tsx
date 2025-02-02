import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from '../../components/Post/styles'

const Post = (props: any) => {
  console.log(props)
  return (
    <View style={styles.container}>
    <Image source={{ uri: props.post.image }} style={styles.image} />
      
      <Text style={styles.bedrooms}>{props.post.bed} beds {props.post.bedroom} bedrooms</Text>

      <Text style={styles.description} numberOfLines={2}>
        {props.post.type}. {props.post.title}
      </Text>

      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${props.post.oldPrice}</Text>
        <Text style={styles.newPrice}> ${props.post.newPrice} </Text>
        / night
      </Text>


      <Text style={styles.totalPrice}>${props.post.totalPrice} total</Text>
    </View>
  )
}

export default Post

