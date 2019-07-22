import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

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

  render(){
    
    return (

      
      // <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end'}}>
      //   <View style={{width: 50, height: 50, backgroundColor: 'red'}}></View>        
      //   <View style={{width: 50, height: 50, backgroundColor: 'green'}}></View>                
      //   <View style={{width: 50, height: 50, backgroundColor: 'blue'}}></View>        
      // </View>

      <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-evenly'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'red'}}></View>        
        <View style={{width: 50, height: 50, backgroundColor: 'green'}}></View>                
        <View style={{width: 50, height: 50, backgroundColor: 'blue'}}></View>        
      </View>

      // <View style={‌{flex: 1, flexDirection: 'column', alignItems:'stretch'}}>
        // <View style={‌{width: 100, height: 50, backgroundColor: 'green'}} />
        // <View style={‌{ height: 50, backgroundColor: 'blue'}} />
        // <View style={‌{ height: 50, backgroundColor: 'red'}} />
      // </View>
      
      // <View style={{flex: 1, backgroundColor: 'red'}}>
      //   <View style={{height: 65, backgroundColor: 'green'}}></View>
      //   <View style={{flex: 1, backgroundColor: 'yellow'}}></View>        
      //   <View style={{height: 65, backgroundColor: 'blue'}}></View>        
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  textoPrincipal: {
    fontSize: 27,
    textAlign: 'center'
  },
  textoColor: {
    color: 'red'    
  },
  subTexto: {
    textAlign: 'right'

  }
})
