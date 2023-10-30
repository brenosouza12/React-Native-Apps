import {Text,View,TextInput, Button, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export default function Home(){

    const [name,setName] = useState('')
    const [gender,setGender] = useState('')
    const [birth,setBirth] = useState("")

    function handleUserAdd(){

        console.log("Nome: " + name + '\nGenero: '+ gender + '\nData de Nascimento: ' + birth)

    }

    return(

        <View style = {styles.container}>

          <Text style = {styles.title}>Preencha os Dados</Text>

          <TextInput

            style = {styles.input}

             placeholder = 'Nome Completo'
             placeholderTextColor = 'black'
             value = {name}
             onChangeText = {setName}
          
          />

          <TextInput

            style = {styles.input}
          
             placeholder = 'Gênero'
             placeholderTextColor = 'black'
             value = {gender}
             onChangeText = {setGender}
          


          />

          <TextInput

            style = {styles.input}
          
             placeholder = 'Data de Nascimento'
             placeholderTextColor = 'black'
             value = {birth}
             onChangeText = {setBirth}
          
          
          /> 

          <TouchableOpacity style = {styles.btn} onPress = {handleUserAdd}>

              <Text style = {styles.btnTxt}>Cadastrar</Text>

          </TouchableOpacity>

        </View>

    )
    
}