import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';


   export default function App(){

      const [imagemDado,SetImagemDado] = useState(require('./imagens-dado/outras/dice.png'))

      function sortearDado(){

        let n = Math.ceil(Math.random()*6)


      switch(n){

        case 1: SetImagemDado(require('./imagens-dado/1.png'))
        break

        case 2: SetImagemDado(require('./imagens-dado/2.png'))
        break

        case 3: SetImagemDado(require('./imagens-dado/3.png'))
        break

        case 4: SetImagemDado(require('./imagens-dado/4.png'))
        break

        case 5: SetImagemDado(require('./imagens-dado/5.png'))
        break

        case 6: SetImagemDado(require('./imagens-dado/6.png'))
        break

      } 

    }
   
     return (

       <View style = {styles.container}> 
       
          <Image 

          source = {imagemDado}
           style = {styles.imagem}

          />
          <TouchableOpacity style = {styles.botaoDado} onPress = {sortearDado}>

            <Text style = {styles.textoBotaoDado}>Let's Play</Text>

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

      botaoDado: {

        width: 150,
        height: 50,
        backgroundColor: '#752126',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10

      },

      textoBotaoDado: {

        fontSize: 25,
        color: 'white',

      }
    }

    )
    
  