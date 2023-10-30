import { StatusBar } from 'expo-status-bar';
// import React from 'react';
import { useState } from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';


   export default function App(){

      const [imagemBiscoito,SetImagemBiscoito] = useState(require('./imagens/biscoito.png'))
      const [textBiscoito,setTextBiscoito] = useState('')

      const textoBiscoito = ["Haruna é demais, by Lizzie Suzuki","Experiencias são partes da vida, by Luna Sparkle","Uma meta é sonho com prazo, by Clara Wayland","O fracasso nunca é o fim, apenas o alívio cômico antes do sucesso, by Luna Ederhardt.","A vida já te deu os limões, agora falta você conquistar a tequila e o sal, by Christine Corbin.",
    "Certas amizades valem a pena, mas a nossa vale uma galinha inteira, by Alice Bell","A amizade de duas mulheres é sempre a conspiração contra a terceira, by Rose Verholdt"]

      function QuebrarBiscoito(){

        let numeroAleatorio = Math.ceil(Math.random()*7)
        setTextBiscoito(textoBiscoito[numeroAleatorio])
        SetImagemBiscoito(require('./imagens/biscoitoAberto.png'))
        
    }

      function ReniciarBiscoito(){

        setTextBiscoito('')
        SetImagemBiscoito(require('./imagens/biscoito.png'))

      }
   
     return (

       <View style = {styles.container}> 
       
          <Image 

          source = {imagemBiscoito}
           style = {styles.imagem}

          />

          <Text style = {styles.textoBiscoito}> {textBiscoito}</Text>

          <TouchableOpacity style = {styles.QuebrarBiscoito} onPress = {QuebrarBiscoito}>

            <Text style = {styles.textoBotaoQuebrar}>Quebrar Biscoito</Text>

          </TouchableOpacity>

          <TouchableOpacity style = {styles.ReniciarBiscoito} onPress = {ReniciarBiscoito}>

            <Text style = {styles.textoBotaoReniciar}>Reniciar Biscoito</Text>

          </TouchableOpacity>

           <StatusBar style='auto'/>
       
       </View>

     );

    }

    const styles = StyleSheet.create({

      container: {

        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,

      },

      imagem: {

        width: 200,
        height: 200,
        borderRadius: 20
        
      },

      QuebrarBiscoito: {

        width: 150,
        height: 50,
        // backgroundColor: '#752126',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: 'red',
        borderStyle: 'solid',
        borderWidth: 3


      },

      textoBotaoQuebrar: {

        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',


      },

      ReniciarBiscoito: {

        width: 150,
        height: 50,
        // backgroundColor: '#752126',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: 'red',
        borderStyle: 'solid',
        borderWidth: 3

      },

      textoBotaoReniciar: {

        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',

      },

      textoBiscoito: {

        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',

      }


  
    },

    )
    
  