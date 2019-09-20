import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import { Platform } from '@unimodules/core';
import ArticleList from './components/ArticleList'

import { Provider, connect } from 'react-redux'
import { store } from './redux'

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <ArticleList />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'android') ? StatusBar.currentHeight : 0, // since safe area view only works for ios, this covers android too
    margin: 20,
  },
});

connect()(App)

export default App

