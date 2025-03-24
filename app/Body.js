import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import React from 'react';

export default class Body extends React.Component {

  constructor(props){
    super(props);
    this.nome = "Guilherme";
  }

  chamarNome(){
    return(<Text>{this.nome}</Text>)
}

  render(){
    return(
      <View>
        {this.chamarNome()}
      </View>
    );
  }
}