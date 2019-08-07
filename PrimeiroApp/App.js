import React, {Component} from 'react';
import {View, Text, StyleSheet, Picker} from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      pizza: 0,
      pizzas: [
        {nome: 'Strogonoff', valor: 10.90},
        {nome: 'Calabresa', valor: 20.90},
        {nome: 'Mussarela', valor: 40.90},
        {nome: 'Portuguesa', valor: 50.81},
      ]
    };
    
  }

  render(){

    let pizzaItem = this.state.pizzas.map((v,k) => {
      return <Picker.Item key={k} value={k} label={v.nome}></Picker.Item>
    });

    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Pizzas React</Text>
        <Picker selectedValue={this.state.pizza} onValueChange={(itemValue, itemIndex) => this.setState({pizza: itemValue})}>
          {pizzaItem}
        </Picker>
        <Text style={styles.valorPizza}>Valor pizza: R$ {this.state.pizzas[this.state.pizza].valor}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    textAlign: 'center',
    fontSize: 30,
    color: 'red'
  },
  valorPizza:{
    textAlign: 'center',
    fontSize: 17
  }
});
