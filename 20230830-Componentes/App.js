import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {

  return (

    <View style = {styles.container}>

     <Header/>
     <Body/>
     <Footer/>

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


  
});

function Header(){

   return(

    <View style = {{height: 70, backgroundColor: '#922B21', width:'100%',
     justifyContent : 'center', alignItems: 'center'}}>
      
      <Text style = {{fontSize : 50, color: 'black'}}>I'm a Header</Text>
      
    </View>

   )

}

function Body (){
  
  return(

    <View style = {{flex : 1, backgroundColor: '#F4D03F', width:'100%',
     justifyContent : 'center', alignItems: 'center'}}>
      
      <Text style = {{fontSize : 50, color: 'white'}}>I'm a Body</Text>
    
    </View>

   )

}

function Footer (){
  
  return(

    <View style = {{height: 70, backgroundColor: '#922B21', width: '100%',
     justifyContent : 'center', alignItems: 'center'}}>
      
      <Text style = {{fontSize : 30, color: 'black'}}>I'm a Footer</Text>
    
    </View>

   )

}