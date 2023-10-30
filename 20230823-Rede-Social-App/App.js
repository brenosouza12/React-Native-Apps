import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View,TextInput } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import { useState } from 'react';


let postages = [

  {image: 'youtube', text: 'Ae galera, saiu video novo no canal. Passa lá pra ver eu destruindo no portugol!🔮📺 \nyuoutube.com/devManoJuca \n#fullStackPortugol #portugolehprogramacao #respeitaosdev #tmj'},
  {image: 'arrow-up-right', text: 'Cada linha de código é uma oportunidade para transformar lógica em realidade. Codando para criar o futuro. 💻✨ #DesenvolvimentoInovador'},
  {image: 'cloud-off', text:'Bug? Isso é apenas um quebra-cabeça esperando para ser resolvido. Encontrando soluções elegantes no mundo da programação. 🐛🔍 #DebuggingLife'},
  {image: 'database', text:'Na estrada da programação, cada erro é uma lição e cada desafio é uma chance de crescimento. A busca pela eficiência nunca para. ⚡👩‍💻 #CaminhoDoDev'},
  {image: 'codesandbox', text:'Linhas de código se tornam pontes entre a imaginação e a realidade digital. Construindo possibilidades infinitas com as mãos no teclado. 🌉💡 #ArquitetoDeCodigo'},
  {image: 'coffee', text:'Café, código, repetir. A rotina de um dev é uma dança constante entre criatividade e lógica. 🚀☕ #CodigoCriativo'},
  {image: 'codepen', text:'Só os devs entendem a satisfação de um código limpo e bem documentado. Aquela sensação de realização é imbatível. 📝✅ #CodigoElegante'},
  {image: 'alert-triangle', text:'No universo binário, os desafios se transformam em oportunidades para inovação. Codando hoje o mundo de amanhã. 🌐👨‍💻 #FuturoDoCodigo'},
  {image: 'activity', text:'Enxergando além das linhas de código, vislumbrando um ecossistema de tecnologia em constante evolução. 🌍📱 #VisaoTech'},
  {image: 'award', text:'A comunidade de desenvolvedores é como um vasto playground virtual, onde ideias se tornam colaborações e projetos incríveis. 🤝🌈 #ComunidadeDev'},
  {image: 'aperture', text:'Cada algoritmo é uma jornada de resolução de problemas, uma trilha para aprimorar habilidades e chegar a soluções brilhantes. 🗺️✨ #AlgoritmoExplorador'},

]

export default function App() {

     const [contentFeed, setContentFeed] = useState (<Feed/>)

    function ShowFeed(){

      setContentFeed(<Feed/>)
      
    }

    function ShowProfile(){

      setContentFeed(<Profile/>)

    }

    function ShowPostage(){

      setContentFeed(<Postages/>)

    }

  return (

    <View style={styles.container}>

      <View style = {styles.header}>
      
      <TouchableOpacity onPress = {ShowFeed}>

      <FontAwesome 

          name = 'home'
          size = {45}
          color = '#000'

        />

      </TouchableOpacity>
      
      <TouchableOpacity onPress = {ShowProfile}>

      <FontAwesome 

          name = 'user'
          size = {45}
          color = '#000'

        />

      </TouchableOpacity>
      

      <TouchableOpacity onPress = {ShowPostage}>

      <FontAwesome 

          name = 'bath'
          size = {45}
          color = '#000'

        />

      </TouchableOpacity>

      </View>

      <View style = {styles.feed}>

        <ScrollView>

          {contentFeed}

        </ScrollView>

         </View>

      <View style = {styles.footer}><Text style = {{color: '#fff'}}></Text></View>
    
    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',

  },

  header: {

    backgroundColor: 'red',
    // flex: 1,
    height: 65,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 4,

  },

  feed: {

    backgroundColor: 'yellow',
    // flex: 8,
    width: '100%',

  },

  footer: {

    backgroundColor: 'red',
    // flex: 1,
    height: 65,
    width: '100%',

  },

  text: {

    fontWeight: 'bold',
    color: 'black',

  },

  ProfileText: {

    fontWeight: 'bold',
    color: 'black',

  },

  inputPostage: {

    fontWeight: 'bold',
    color: 'black',

  },

  save: {

    backgroundColor: 'yellow',
    // flex: 8,
    width: '100%',
  },

});

function Feed(){

   return(

     <View>

      {/* <Post image = {postages[0].image} text = {postages[0].text} /> */}
      
      {postages.map( (post, index) => (

        <Post text = {post.text} image = {post.image}
        key = {index}/>

      ) )}
    
     </View>

   )

}

function Post(props){

  return(

    <View style = {{alignItems: 'center', padding: 15}}>

    <Feather 

       name = {props.image}
       size = {145}
       color = '#000'

     /> 

     <Text style = {styles.text}>{props.text}</Text>

    </View>

  )

}

function Profile(){

  return(

     <View style = {{alignItems:'center', padding: 20}}>

      <Feather

      name = 'user-check'
      size = {160}
      color = 'black'
      
      />

      <Text style = {styles.ProfileText}>Christine Corbin, a 6-years-old girl, who comes to the app</Text>

     </View>

  )

}

function Postages (){

  const [inputImage,setInputImage] = useState();
  const[inputText,setInputText] = useState();

  function PublishRegister(){

     let NewImageAndText = {

        image: inputImage,
        text: inputText

     }
      
     postages.push(NewImageAndText)
     setInputImage('')
     setInputText('')

   }

   return(

     <View style = {styles.SavePublish}>

      <Text style = {styles.ProfileText}>Make your post here :</Text>

      <TextInput style = {styles.inputPostage}
      
         value = {inputText}
         onChangeText = {setInputText}

      />

       <TouchableOpacity style = {styles.save} onPress = {PublishRegister}>

        <Text>Save</Text>

       </TouchableOpacity>

     </View>

  )

}