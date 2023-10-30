import {Text,View,TextInput, Button, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export default function HomeMap(){

    const [data,setData] = useState([

      'Haruna Suzuki (1993)','Madison Villehardt (2015)',
      'Christine Corbin (2016)','Luna Moonvalkyrie (2021)','Louise Wood (2012)'

    ])

    return(

        <View style = {styles.container}>

          <Text style = {styles.title}>Convidados - Festa do Breno</Text>

          {/* <Text style = {styles.itemList}>


          </Text> */}

          {

            data.map( item => (

              <Text

              key = {item}
              style = {styles.itemList}
              
              >

                  { item }

              </Text>

            ))

          }
            
        </View>

    )
    
}