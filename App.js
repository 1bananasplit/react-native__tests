import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Switch } from 'react-native';

export default function App() {

const [value, setValue] = useState(false)
const [text, setText] = useState('')

const onChange = () => 
setValue(previous => !previous);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
      </View>
      <Text value={text} style={styles.mout}></Text>

      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        ios_backgroundColor="#3e3e3e"
        value={value}
        onValueChange={onChange}
      />
      
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
  mout :{
    margin: 15,
  },
  input:{
    backgroundColor: "red",
    borderColor: "black"
  }
});
