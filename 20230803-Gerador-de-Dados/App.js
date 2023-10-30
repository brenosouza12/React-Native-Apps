import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import { useState } from 'react';


export default function App() {

  const [louise,setLouise] = useState(0)

function Rolar(){

  setLouise(Math.ceil(Math.random()*6))

}

// function clicadoReseta(){

//   setLouise(louise-louise)

// }
  return (

    <View style={styles.container}>

    <Image

        source={{uri: "https://3.bp.blogspot.com/-NlTbpeS219E/UPNio9EpR5I/AAAAAAAAOcs/6vKceXco_-s/s1600/Imagens-em-png-Queroimagem.com+(492).png"}}
        style={{width: 200, height: 200}}

      />

      <Text style={styles.textoH1}>Gerador de Dados</Text>

      {/* <Text style={styles.textoH2}>Um gerador de dados simples e pratico</Text> */}

      <Text style={styles.textoH3}>{louise}</Text>

      {/* <TouchableOpacity style={styles.botaoGerar} onPress={clicado}>

        <Text style={styles.textoBotaoGerar}>Gerar</Text>

      </TouchableOpacity> */}

      <TouchableOpacity style={styles.botaoZera} onPress={Rolar}>

        <Text style={styles.textoBotaoZera}>Rolar</Text>

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

    fontSize: 50,
    fontWeight: 'bold',
    color: 'red',
    
  },

  // textoH2: {

  //   fontSize: 25,
  //   fontWeight: 'bold',
  //   color:'black',

  // },

  textoH3: {

    fontSize: 80,
    fontWeight: 'bold',
    color:'black',

  },

  botaoGerar: {

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

  textoBotaoGerar: {

    fontSize:34,
    fontWeight: 'bold',
    color:'white',

  },

  botaoZera: {

    width: 150,
    height: 50,
    color: 'red',
    backgroundColor: 'red',
    display: 'flex' ,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,

  },

  textoBotaoZera: {

    fontSize:34,
    fontWeight: 'bold',
    color:'black',

  },

});

