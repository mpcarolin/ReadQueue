import { View, Text, FlatList } from 'react-native';
import { SearchBar } from './SearchBar'
import { Article } from './Article'
import { HorizontalRule } from './HorizontalRule'
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import React, { useEffect }   from 'react';
import { initArticles } from '../redux/actionCreators'
import Hooks, {} from '../hooks/'


const ArticleList = ({initArticles}) => {
    const [articles, pending] = Hooks.useSharedState(state => state.articles)
    const [isHidden, updateFilter, hiddenSet] = Hooks.useFilter(articles, a => a.title)

    useEffect(() => { initArticles() }, [])

    return (
        <View>
            <Text style={ !pending && styles.hidden }>Loading...</Text>
            <View style={ pending && styles.hidden }>
              <SearchBar onSearchUpdated={updateFilter} />
              <HorizontalRule />
              <Text style={ (hiddenSet.size === articles.length) ? '' : styles.hidden}>No matches found.</Text>
              <FlatList
                  data={Object.values(articles)}
                  renderItem={({item}) => !isHidden(item) ? <Article source={item} /> : null}
                  keyExtractor={item => item.title}
              />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    hidden: {
        display: "none"
    }
})

const mapDispatchToProps = { initArticles }
export default connect(null, mapDispatchToProps)(ArticleList)