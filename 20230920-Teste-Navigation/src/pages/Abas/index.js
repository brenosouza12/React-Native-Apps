import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Abas(){

    return(

        <View style = {styles.container}>

            <Text>Tela Abas</Text>
            <Text>Louise</Text>

        </View>

    )
}

const styles = StyleSheet.create({

    container:{

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    }

})