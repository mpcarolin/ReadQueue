import React, { useState } from 'react';
import { StatusBar, SafeAreaView, FlatList, StyleSheet, Text, View, TextInput } from 'react-native';
import { Platform } from '@unimodules/core';

const initialState = {
  articles: [
    {
      title: "iPhone 12 Announced",
      content: "The iPhone 12 was announced today at the Steve Jobs theater, bringing apple fans teleportation capabilities for the first time.",
      date: "September 9, 2019"
    },
    {
      title: "Man Eats Toupee, in Fit of Rage",
      content: "After an exhausting day, the man removed his wig and started eating it before a crowd of onlookers.",
      date: "September 8, 2019"
    }
  ]
}

const Article = ({source}) => {
  const {title, date, content} = source
  return (
    <View style={styles.article}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  )
}

const SearchBar = ({onSearchUpdated}) => {
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

export default class App extends React.Component {
  state = { articles: initialState.articles }

  updateSearch (text) {
    const nextArticles = this.state.articles.filter(a => a.title.toLowerCase().includes(text.toLowerCase()))
    this.setState({
      articles: (text && text.length) ? nextArticles : initialState.articles
    })
  }

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <SearchBar onSearchUpdated={this.updateSearch.bind(this)} />
        <HorizontalRule />
        <Text style={this.state.articles.length ? {} : styles.article}>No matches...</Text>
        <FlatList
          data={this.state.articles}
          renderItem={({item}) => <Article source={item} />}
          keyExtractor={item => item.title}
        />
      </SafeAreaView>
    );
  }
}

const HorizontalRule = () => <View style={styles.hr} />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'android') ? StatusBar.currentHeight : 0, // since safe area view only works for ios, this covers android too
    margin: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20
  },
  date: {
    fontStyle: "italic"
  },
  content: {
     marginLeft: 25    
  },
  search: {
    padding: 10,
    height: 50,
    marginLeft: 5,
    width: 300,
    backgroundColor: "#E6DFDF",
    borderRadius: 25,
  },
  hr: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,  
    width: "100%",
    margin: 10
  },
  article: {
    marginBottom: 10
  },
  hidden: {
    display: "none"
  }
});
