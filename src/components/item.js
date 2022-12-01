
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet,Text,View,Image} from 'react-native';



export default function Item(props) {
const {texto } = props
  
  return (

      <View>
          <Text> {texto} </Text>
      </View>
    
  );
}

const styles = StyleSheet.create({
  
});
