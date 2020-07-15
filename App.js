import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('Chris');
  const [age, setAge] = useState(20);

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
      placeholder='e.g. John Doe'
      style={styles.input}
      onChangeText={(val) => setName(val)} 
      />
      <Text>Enter age:</Text>
      <TextInput 
      placeholder='e.g. 12'
      keyboardType='numeric'
      style={styles.input}
      onChangeText={(val) => setAge(val)}
      />
      <Text>name: {name}, age: {age}</Text>
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
  input: {
    borderColor: '#777',
    borderWidth: 1,
    padding: 8,
    margin: 10,
    width: 200,
  }
});
