import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      nome: ''
    };

    this.pegaNome = this.pegaNome.bind(this);
  }

  pegaNome(texto){
    let state = this.state;

    state.nome = texto.length > 0 ? 'Bem vindo ' + texto : '';

    this.setState(state);
  }

  render(){
    
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Nome?" underlineColorAndroid="transparent" onChangeText={this.pegaNome}/>

        <Text style={styles.nome}>{this.state.nome}</Text>
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: 'black',
    margin: 20,
    padding: 10
  },
  nome: {
    textAlign: 'center',
    fontSize: 17,
    color: 'black'
  }

});
