import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      listaData: [
        {key: '1', nome: 'Henrique', idade: '23', email: 'carlosbridi@gmail.com'},
        {key: '2', nome: 'José', idade: '22', email: 'carlosbridi@gmail.com'},
        {key: '3', nome: 'Maria', idade: '21', email: 'carlosbridi@gmail.com'},
        {key: '4', nome: 'João', idade: '20', email: 'carlosbridi@gmail.com'},                        


        {key: '5', nome: 'C José', idade: '22', email: 'carlosbridi@gmail.com'},
        {key: '6', nome: 'B Maria', idade: '21', email: 'carlosbridi@gmail.com'},
        {key: '7', nome: 'A João', idade: '20', email: 'carlosbridi@gmail.com'},                        

      ]
    }

  }

  renderData(item){
    return (
      <View style={styles.areaView}>
        <Text style={styles.texto}> {item.nome}</Text>
        <Text style={styles.texto}> {item.idade}</Text>
        <Text style={styles.texto}> {item.email}</Text>
      </View>
    );
  }

  render(){
    return (
      <View style={styles.container}>
        <FlatList data={this.state.listaData} renderItem={({item}) => this.renderData(item)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  },

  areaView: {
    marginTop: 25
  },

  texto: {
    fontSize: 18,
    color: "#FFFFFF"
  }
});
