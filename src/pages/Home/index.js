import { useState, useContext } from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity} from 'react-native'


import Product from '../../components/Product'
import { useNavigation } from '@react-navigation/native'
import { CartContext } from '../../contexts/CartContext'
import Header from '../../components/Header'

export default function Home(){
  const { cart, addItemCart } = useContext(CartContext)

  const navigation = useNavigation();
  const [products, setProducts] = useState([
    {
      id: '1',
      name: "Coca cola",
      price: 19.90,
      img: 'https://images.pexels.com/photos/4389665/pexels-photo-4389665.jpeg'
    },
    {
      id: '2',
      name: "Chocolate",
      price: 6.50,
      img: 'https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: '4',
      name: "Queijo 500g",
      price: 15,
      img: 'https://images.pexels.com/photos/2531189/pexels-photo-2531189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: '5',
      name: "Batata frita",
      price: 23.90,
      img: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: '6',
      name: "Guarana lata",
      price: 6.00,
      img: 'https://www.imigrantesbebidas.com.br/bebida/images/products/full/1935-refrigerante-guarana-antarctica-lata-350ml.jpg'
    },
  ])

  function handleAddCart(item){
    addItemCart(item)
  }

  return(
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.cartContent}>
        <Text style={styles.title}>Lista de produtos</Text>

        
      </View>

      <FlatList
        style={styles.list}
        data={products}
        keyExtractor={ (item) => String(item.id) }
        renderItem={ ({ item }) => <Product data={item} addToCart={ () => handleAddCart(item) } /> }
      />


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#FAFAFA',
    paddingEnd: 14,
    paddingStart: 14,
  },

  cartContent:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: 20,
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold'
  },
 
})