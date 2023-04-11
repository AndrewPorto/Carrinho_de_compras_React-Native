import { useState, useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { CartContext } from '../../contexts/CartContext'

export default function Header(){
    const navigation = useNavigation();
    const { cart, addItemCart } = useContext(CartContext)
    return(
        <View style={styles.container}>
            <View style={styles.logo}>
                <Text style={styles.textLogo}>Meu negócio</Text>
            </View>
            <TouchableOpacity 
            style={styles.cartButton} 
            onPress={ () => navigation.navigate("Cart")}
            >
            {cart.length >= 1 && (
                <View style={styles.dot}>
                <Text style={styles.dotText}>
                    {cart?.length}
                </Text>
                </View>
            )}

                <Feather name="shopping-cart" size={30} color="#000" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: '#FAFAFA',
        paddingTop: 20,
        justifyContent: 'space-between',
        marginBottom: 15
    },
    logo:{
        backgroundColor: '#168fff',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 20,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderTopRightRadius:5,
        borderBottomRightRadius: 40
    },
    textLogo:{
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFF'

    },
    cartButton:{
        padding: 5,


    },
    dot:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "red",
        width: 20,
        height: 20,
        borderRadius: 12,
        position: 'absolute',
        zIndex: 99,
        bottom: -2,
        left: -4,
      },
      dotText:{
        fontSize: 12,
      }
})