import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Product({ data, addToCart}) {
 return (
   <View style={styles.container}>
    <View>
        <Image
          style={styles.img}
          source={{uri:data.img}}
        />
      </View>
    <View>
      
      <Text style={styles.title}>{data.name}</Text>
      <Text style={styles.price}>R$ {data.price}</Text>
    </View>

    <TouchableOpacity style={styles.buttonAdd} onPress={addToCart}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    borderWidth: 1,
    borderColor: '#DFDFDF',
    borderRadius: 2,
    marginBottom: 14,
    padding: 8,
    paddingBottom: 14,
    paddingTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 100
  },
  title:{
    fontWeight: 'bold'
  },
  buttonAdd:{
    paddingStart: 12,
    paddingEnd: 12,
    backgroundColor: '#168fff',
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 2,
  },
  img:{
    width: 100,
    height: 100,
    marginLeft: -10,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5
  }
})