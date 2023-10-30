import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import { useState } from 'react';


export default function App() {

  const [louise,setLouise] = useState(0)

function clicado(){

  setLouise(louise + 1)

}

function clicadoReseta(){

  setLouise(louise-louise)

}
  return (

    <View style={styles.container}>

    <Image

        source={{uri: "https://logosmarcas.net/wp-content/uploads/2021/08/Flash-Logo-650x366.png"}}
        style={{width: 200, height: 200}}

      />

      <Text style={styles.textoH1}>Flash App</Text>

      <Text style={styles.textoH2}>Um contador simples e pratico</Text>

      <Text style={styles.textoH3}>{louise}</Text>

      <TouchableOpacity style={styles.botaoAumentar} onPress={clicado}>

        <Text style={styles.textoBotaoAumentar}>Aumentar</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoReseta} onPress={clicadoReseta}>

        <Text style={styles.textoBotaoReseta}>Resetar</Text>

      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({

  container: {

    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,

  },

  textoH1:{

    fontSize: 65,
    fontWeight: 'bold',
    color: 'red',
    
  },

  textoH2: {

    fontSize: 25,
    fontWeight: 'bold',
    color:'black',

  },

  textoH3: {

    fontSize: 90,
    fontWeight: 'bold',
    color:'black',

  },

  botaoAumentar: {

    width: 150,
    height: 50,
    color: 'red',
    backgroundColor: 'red',
    display: 'flex' ,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,

  },

  textoBotaoAumentar: {

    fontSize:34,
    fontWeight: 'bold',
    color:'white',

  },

  botaoReseta: {

    width: 150,
    height: 50,
    color: 'red',
    backgroundColor: 'red',
    display: 'flex' ,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,

  },

  textoBotaoReseta: {

    fontSize:34,
    fontWeight: 'bold',
    color:'black',

  },

});
