import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    { name: 'chris', id: '1' },
    { name: 'mariah', id: '2' },
    { name: 'zach', id: '3' },
    { name: 'michael', id: '4' },
    { name: 'toby', id: '5' },
    { name: 'dwight', id: '6' },
    { name: 'angela', id: '7' },

  ])

  const pressHandler = (id) => {
    setPeople(prevPeople => {
      return prevPeople.filter(person => person.id != id)
    })
  }

  return (
    <View style={styles.container}>
      <FlatList
        numColumns = {2}
        keyExtractor = {(person) => person.id}
        data={people}
        renderItem = {({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.peep}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* <ScrollView>
        { people.map(person => (
          <View id={person.id}>
              <Text style={styles.peep}>{person.name}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  peep: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
  }
});
