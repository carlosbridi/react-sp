import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

/*class Jobs extends Component {
  render() {
    let img = {
      uri: 'https://sujeitoprogramador.com/steve.png'
    }
    return (
      <Image source={img} style={{width: parseInt(this.props.largura), height: parseInt(this.props.altura)}}/>
    );
  }
}
*/

export default class App extends Component {


  constructor(props){
    super(props);

    this.state = {
      pizza: ''
    };

    var pizzas = ['Frango com Catupiry', 'Calabresa', 'Strogonoff', 'Brigadeiro', 'Quatro queijos'];

    setInterval(() => {
      this.setState(previousState => {
        var n = Math.floor(Math.random() * pizzas.length);
        return { pizza: pizzas[n]}
      });
    }, 1000)

  }

  render(){
    
    return (
      <View>
        
        <Text style={{textAlign: 'center', fontSize: 27, fontWeight: 'bold', color: 'red'}}>Menu Pizzas</Text>

        <Text style={{textAlign: 'center', fontSize: 20, color: 'black'}}>{this.state.pizza}</Text>

        {/* <Text>Olá mundo</Text>
        <Text>Olá mundo</Text>                
        <Text style={{color: 'red', fontSize: 25}}>Olá mundo</Text>        

        <Text>{nome}</Text>
        <Jobs largura='500' altura='150'/> */}

      </View>
    );
  }
}
