import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 30,
    },
    image: {
        width: '100%',
        resizeMode: 'cover',
        aspectRatio: 3/2,
        borderRadius: 10,
    },
    bedrooms: {
        marginVertical: 10,
        color: '#5b5b5b'
    },
    description: {
        fontSize: 18,
        lineHeight: 22,
    },
    prices: {
        fontSize: 18,
        marginVertical: 10,
    },
    oldPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through',

    },
    newPrice: {
        fontWeight: 'bold',
    },
    totalPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'underline',
    }
})

export default styles;