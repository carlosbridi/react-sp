import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      texto: '',
      textoInput: ''
    }

    this.enviar = this.enviar.bind(this);
  }


  enviar(){
    let state = this.state;

    state.texto = "Bem vindo " + state.textoInput;
    this.setState(state);
  }

  render(){
    
    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.input} 
          underlineColorAndroid="transparent" 
          placeholder="Digite seu nome"
          onChangeText={(textoInput) => this.setState({textoInput})}
        />

        <Button title="Aperte" onPress={this.enviar}/>

        <Text style={styles.texto}>{this.state.texto}</Text>
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  input: {
    margin: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    height: 45
  },

  texto: {
    fontSize: 23,
    color: "black",
    textAlign: 'center',
    marginTop: 15
  }
});
