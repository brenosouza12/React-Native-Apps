import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {

     const [entradaD_R,setEntradaD_R = useState('')
     const [saidaD_R,setSaidaD_R] = useState(0)
     const [entradaR_D,setEntradaR_D] = useState('')
     const [saidaR_D,setSaidaR_D] = useState(0)

    //dolar pra real

     function converterD_R (){

       let dolar = Number(entrada)/ 4.87
       setSaidaDolarD_R(dolar)

      }

    //real pra dolar 

     function converterR_D (){

       let real = Number(entradaR_D)/0.20
       setSaidaR_D(real)

     } 

  return (

    <ScrollView>

    <View style = {styles.container}>

      <View style = {styles.quadroD_R}>

        <Text style = {styles.textoConverterD_R}>Converter Dolar em Real</Text>

      <TextInput 
         
         style = {styles.inputD_R}
         keyboardType = 'numeric'
         onChangeText = {setEntradaD_R}
           
      />

      <TouchableOpacity style = {styles.botaoR_D} onPress = {converterD_R}>

         <Text style = {styles.textoBotaoD_R}>Entrar</Text>

      </TouchableOpacity>

      <Text>{saidaD_R}</Text>

      </View>
    
      </View>

      <StatusBar style="auto" />

      </ScrollView>

  );

}
const styles = StyleSheet.create({

  container: {

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    marginTop: 25,

  },

  //CONVERTER DOLAR EM REAL

  inputR_D: {

    borderWidth: 1,
    width: 140,
    height: 35,
    borderRadius: 10,
    padding: 10,
   
    
  },

  quadroD_R: {

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    marginTop: 25,
  },

  textoConverterD_R: {

    fontSize: 30,
    fontWeight: 'bold',
   
  },

  botaoD_R: {

    width: 145,
    height: 35,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 0,

  },
  textoBotaoR_D: {

    color:'white',
    fontSize: 25,
    fontWeight: 'bold'

  },

})