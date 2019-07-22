import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      a: 'teste'
    };

  }

  render(){
    return (
      <View style={styles.container}>
        <Image source={require('./src/cronometro.png')}/>
        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>
        
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.btnTexto}>VAI</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.botao}>
            <Text style={styles.btnTexto}>LIMPAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00aeef'
  },
  timer: {
    marginTop: -160,
    color: 'white',
    fontSize: 72,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  botao: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: 40,
    margin: 17,
    borderRadius: 9
  },

  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  }
});
