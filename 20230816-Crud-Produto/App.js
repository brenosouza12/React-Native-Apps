import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

let products = []

export default function App() {

  const [entradaCharacterName,setEntradaCharacterName] = useState ('')
  const [entradaPrice,setEntradaPrice] = useState('')

  function register(){

    let product = {

       name : entradaCharacterName,
       price : Number(entradaPrice)

    }

    products.push(product);
    console.log(products);
    setEntradaCharacterName('')
    setEntradaPrice('')
    
  }

  function survey(){

     for(let i = 0; i < products.length;i++){

        if(entradaCharacterName == products[i].name){

           setEntradaPrice(products[i].price)
           return products[i]

        }

     }

  }

  function edit(){

     let productEdit = survey()
     productEdit.price = Number(entradaPrice)
     console.log(productEdit);
     setEntradaCharacterName('')
     setEntradaPrice('')

  }
   
  return (

    <View style={styles.container}>

      <Text>CRUD</Text>

      <TextInput
      
        value = {entradaCharacterName}
        onChangeText = {setEntradaCharacterName}
        style = {styles.inputs}
        placeholder = 'Name...'
      
      />

      <TextInput
      
        value = {entradaPrice}
        onChangeText = {setEntradaPrice}
        style = {styles.inputs}
        placeholder = 'Price....'

      />

     <View style = {styles.line}>

      <TouchableOpacity style = {styles.button} onPress = {register}>

        <Text style = {styles.textButton}>Add</Text>

      </TouchableOpacity>

      <TouchableOpacity style = {styles.button} onPress = {register}>

        <Text style = {styles.textButton}>Survey</Text>

      </TouchableOpacity>

      <TouchableOpacity style = {styles.button} onPress = {edit}>

        <Text style = {styles.textButton}>Edit</Text>

      </TouchableOpacity>

     </View>

     <View>

       {products.map( (product, index) => (

        <Text key = {index}>{product.name} - R${product.price.toFixed(2)}</Text>

       ) )}

     </View>
   
      <StatusBar style="auto" />

    </View>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop : 40,
    gap: 15,

  },

  inputs: {

    borderWidth: 1,
    width: 140,
    padding: 5,
    borderRadius: 5,

  },

  button: {

    borderWidth: 1,
    width: 60,
    backgroundColor: '#00ddff',
    padding: 5,
    borderRadius: 5,
    
  },

  textButton: {

    color: 'red',

  },

  line: {

    flexDirection: "row",
    gap: 2,
     
  },

});