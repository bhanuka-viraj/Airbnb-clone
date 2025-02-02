import { Dimensions, Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 500,
        justifyContent: 'center',
    },

    text: {
        fontSize: 70,
        fontWeight: 'bold',
        color: '#fff',
        width: '40%',
        marginLeft: '5%',
    },
    button: {
        backgroundColor: '#fff',
        padding: 10,
        width: '40%',
        marginLeft: '5%',
        marginTop: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    buttonText:{
        color: '#000',
        fontWeight: '500',
    },
    
    searchButton: {
        backgroundColor: '#fff',
        padding: 10,
        width: Dimensions.get('screen').width - 50,
        height: 60,
        marginLeft: 25,
        marginTop: 10,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: Platform.OS === 'ios' ? 50 : 10,
        zIndex:100
        
    },
    searchButtonText:{
        color: '#000',
        fontWeight: '500',
        paddingLeft:5
    }
});

export default styles;
