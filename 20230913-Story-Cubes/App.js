import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const figures = ['🎶','🤡','😊','❤️','😒','👌','😍','😁',
'😋','🤷‍♂️','🐱','👧','🐱']

// const emojiDescriptions = {

//   '🎶': 'Nota musical',
//   '🤡': 'Palhaço',
//   '😊': 'Rosto sorridente com olhos sorridentes',
  
// };


export default function App() {
  
  const [figureAleatorio, setFigureAleatorio] = useState('');
  const [initialFigure, setInitialFigure] = useState('');

  useEffect(() => {

    setInitialFigure(figures[0]);

  }, []);

  function Louise() {

    setFigureAleatorio(figures[Math.floor(Math.random() * figures.length)]);

  }

  function resetFigure() {

    setFigureAleatorio(initialFigure);

  }

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>Escreva sua historia aqui</Text>

      <Text style={styles.figures}>{figureAleatorio}</Text>

      <TouchableOpacity style={styles.button} onPress={Louise}>

        <Text style={styles.changeButton}>Change Figure</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.resetButton} onPress={resetFigure}>

        <Text style={styles.changeButton}>Reset Figure</Text>

      </TouchableOpacity>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',

  },

  titulo: {

     backgroundColor: '#FFFFFF',
     borderRadius: 15,
     fontSize: 25,
     fontWeight: 'bold',
     padding: 10,
     marginBottom: 20,

  },

  figures: {

    fontSize: 120,
    marginBottom: 20,

  },

  button: {

    backgroundColor: '#2196F3',
    borderRadius: 15,
    padding: 10,

  },

  resetButton: {

    backgroundColor: '#FF5733',
    borderRadius: 15,
    padding: 10,
    marginTop: 10,

  },

  changeButton: {

    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',

  },

});
