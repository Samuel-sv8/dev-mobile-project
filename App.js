import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import bolo from './assets/bolo.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.firstTexto}>Casa do Bolo</Text>
      <Image source={bolo} style={styles.foto} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstTexto: {
    color: 'blue',
    fontSize: 22,
  },
  foto: {
    width: 300,
    height: 400,
  }
});
