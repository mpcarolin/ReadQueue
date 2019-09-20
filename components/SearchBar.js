import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

export const SearchBar = ({onSearchUpdated}) => {
  const [text, setText] = useState("")
  const updateText = (t) => {
    setText(t)
    onSearchUpdated(t)
  }
  return (
    <TextInput
      style={styles.search}
      placeholder="Search..."
      onChangeText={updateText}
      value={text}
    />
  )
}
  
const styles = StyleSheet.create({
  search: {
    padding: 10,
    height: 50,
    marginLeft: 5,
    width: 300,
    backgroundColor: "#E6DFDF",
    borderRadius: 25,
  }
})
