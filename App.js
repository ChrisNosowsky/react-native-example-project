import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    { name: 'chris', key: '1' },
    { name: 'mariah', key: '2' },
    { name: 'zach', key: '3' },
    { name: 'michael', key: '4' },
    { name: 'toby', key: '5' },
    { name: 'dwight', key: '6' },
    { name: 'angela', key: '7' },

  ])

  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
  }
});
