
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet,
  Text,
  View, 
  Image, 
  SafeAreaView,
  Button,
  Pressable} from 'react-native';
import Item from './src/components/item.js';
import bolo from './assets/bolo.png';
import bolomilho from './assets/bolomilho.png';
import bolofofo from './assets/bolofofo.png';
import bolomorango from './assets/bolomorango.png';

export default function App() {
  
  return (
    <SafeAreaView>

      <View style={styles.container}>
        <Text style={styles.firstTexto}> Casa do Bolo</Text>
        <Text style={styles.twoTexto}> Escolha a opcao desejada </Text>

        <Item texto="bolo de cholate" />

        {/* <View> 
          <Text style={styles.threTexto}> 1- Chocolate </Text>
          <Image source={bolo} style={styles.foto} />
        </View> */}

        <View>
          <Text style={styles.fourTexto}> 2- Milho </Text>
          <Image source={bolomilho} style={styles.fototwo} />
        </View>

        <View>
          <Text style={styles.fiveTexto}> 3- Fofo </Text>
          <Image source={bolofofo} style={styles.fotothre} />
        </View>

        <View>
          <Text style={styles.sixTexto}> 4- Morango </Text>
          <Image source={bolomorango} style={styles.fotofour} />
        </View>

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'side',
    justifyContent: 'side',
    
  },
  firstTexto : {
    color : 'blue',
    fontSize : 22,
    height : 50,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  twoTexto : {
    color : 'black',
    fontSize : 22,
    height : 40,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  threTexto : {
    color : 'brown',
    fontSize : 22,
    height : 40,
    fontWeight: 'bold',
  },
  fourTexto : {
    color : 'yellow',
    fontSize : 22,
    height : 40,
    fontWeight: 'bold',
  },
  fiveTexto : {
    color : 'malt',
    fontSize : 22,
    height : 40,
    fontWeight: 'bold',
  },
  sixTexto : {
    color : 'red',
    fontSize : 22,
    height : 40,
    fontWeight: 'bold',
  },
  sixTexto : {
    color : 'red',
    fontSize : 22,
    height : 40,
    fontWeight: 'bold',
  },
  foto :  {
    width : 150,
    height : 150,
  
  },
  fototwo :  {
    width : 150,
    height : 150,
  
  },
  fotothre :  {
    width : 150,
    height : 150,
  
  },
  fotofour :  {
    width : 150,
    height : 150,
  
  }
});
