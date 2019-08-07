import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props);
  }


  render(){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.texto}>Ultimas noticias</Text>
        </View>

        <ScrollView>
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
          <View style={styles.box4}></View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },

  box1: {
    backgroundColor: 'blue',
    height: 250
  },
  box2: {
    backgroundColor: 'green',
    height: 250
  },
  box3: {
    backgroundColor: 'yellow',
    height: 250
  },
  box4: {
    backgroundColor: 'red',
    height: 250
  },


  header: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
  },

  texto: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
