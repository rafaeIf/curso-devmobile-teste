import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import Body from './Body';

export default class App extends React.Component {
  body: Body;

  constructor(props: {}){
    super(props);
    this.body = new Body();
    this.body.nome = "felipe";
  }

  render(){
    return(
      <View>
        {this.body.chamarNome()}
      </View>
    );
  }
}