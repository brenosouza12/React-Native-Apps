import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {

  const [contador,setContador] = useState(0);

    let renderizar = true;

    function Aumentar(){

      setContador(contador+1)

    }

    function Diminuir(){

      setContador(contador-1)
      
    }

  return (

    <View style = {styles.container}>

      { contador }

      {/* { contador > 5 && <Componente1 />} */}

      {/* { renderizar && <Componente1 /> } */}

      { contador > 0 ? <Componente1/> : <Componente2/>}

      <Button title = '+' onPress = {Aumentar} />
      <Button title = '-' onPress = {Diminuir} />

      <StatusBar style = "auto" />

    </View>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },

});

function Componente1(){

  return(

       <Text>Eu sou o Componente1</Text>

  )

}

function Componente2(){

  return(

       <Text>Eu sou o Componente2</Text>

  )

}