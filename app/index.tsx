import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { green } from 'react-native-reanimated/lib/typescript/Colors';

export default function App() {

  const nome = "rafael";
  let cidade = "são paulo" //variavel temporária
  var idade = 17; 
  
  var conteudo = <Text>Danki code</Text>
  var mostrarDankiCode = true
  if(mostrarDankiCode && idade < 18){ // == true   ou   != (diferente)
    conteudo = <Text>Danki code</Text>
  }else if(mostrarDankiCode && idade > 17){ // (ou = ||)
    conteudo = <Text>daankii</Text>
  }else{
    conteudo = <View style={{width:"50%" , height:"100%" , backgroundColor:"green"}}></View>
  }

  return (
    <View>
        <Text>O {nome} mora em {cidade} e tem {idade} anos!</Text>
        {conteudo}
    </View>
  );
}