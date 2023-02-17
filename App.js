import * as React from 'react';
import{Text, View, StyleSheet, Image, ScrollView} from 'react-native';

export default function App(){

return(
  <View style={estilo.container}>
  <ScrollView>
  <View style={estilo.container}>
  <Text style={estilo.titulo}> Bandas favoritas </Text>
  </View>

  <Text style={estilo.subtitulo}> ACDC </Text>
  
  <Image style={estilo.img} source={require('./assets/ACDC.jpg')} />
  
  <Text style={estilo.subtitulo}> Gorillaz </Text>
  
  <Image style={estilo.img} source={require('./assets/Gorilazz.jpg')} />
  
  <Text style={estilo.subtitulo}> Queen </Text>
  
  <Image style={estilo.img} source={require('./assets/Queen.jpg')} />
  
  </ScrollView>
  
  </View>
);

}

const estilo = StyleSheet.create({
 container : {
   flex: 1,
   justifyContent: 'Center',
   alignItems: 'center',
   background: '#0000CD',
 },

 titulo: {
   margintop: 30,
   fontSize: 45,
   color: '#FFF8DC',
   marginBottom: 25,
 },

img: {
 width: 250,
 height: 200,
 marginBottom: 20, 
 borderRadius: 20,
},

subtitulo: {
  fontSize: 20,
  color: '#FFF8DC'
},

},);