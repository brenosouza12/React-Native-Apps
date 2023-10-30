import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  return (

    <View style = {styles.container}>

        <Header/>
        <Body/>
        {/* <Footer/> */}

      <StatusBar style="auto" />

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

  text: {

    color: 'white',
    fontSize: 15,
    fontFamily: 'arial',

  },

  inputs: {

    width: '80%',
    borderWidth: 3,
    backgroundColor: 'transparent',
    borderColor: '#1e90ff',
    height: 60,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    padding: 10,
    fontSize: 16,
    textAlign: 'center'

  },

  button: {

    width: '20%',
    height: '100%',
    backgroundColor: '#1e90ff',
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'

  }

});

function Header(){

  return(

    <View style = {{

      height: 100,
      backgroundColor: '#1e90ff',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 40,

    }}>
       
        <View style = {{flexDirection: 'row', gap: 20}}>

          <Text style = {styles.text}>Base Conversor</Text>
          <Text style = {styles.text}>Reset</Text>
          <Text style = {styles.text}>:</Text>

        </View>

        <View style = {{flexDirection:'row', gap: 20}}>

          <Text style = {styles.text}>BASES COMUNS</Text>
          <Text style = {styles.text}>TODAS AS BASES</Text>

        </View>

    </View>

  )

}

function Body(){

  return(

    <View style = {{flex: 1,backgroundColor: '#121212', width: '100%',
     justifyContent: 'center',alignItems: 'center'}}>
      
      <View style = {{gap : 15, alignItems: 'center'}}>

         <View style = {{flexDirection : 'row'}}>

          <TouchableOpacity style = {styles.button}><Text>BIN</Text></TouchableOpacity>

          <TextInput style = {styles.inputs}
          
          placeholder = 'Base 2'
          placeholderTextColor = 'white'
          
          />


         

         </View>

         <View style = {{flexDirection : 'row'}}>

        <TouchableOpacity style = {styles.button}><Text>OCT</Text></TouchableOpacity>

          <TextInput style = {styles.inputs}></TextInput>

         </View>

         <View style = {{flexDirection : 'row'}}>

        <TouchableOpacity style = {styles.button}><Text>DEC</Text></TouchableOpacity>

         <TextInput style = {styles.inputs}></TextInput>

         </View>

         <View style = {{flexDirection : 'row'}}>

        <TouchableOpacity style = {styles.button}><Text>HEX</Text></TouchableOpacity>

           <TextInput style = {styles.inputs}></TextInput>

        </View>

      </View>

     </View>

  )

}
