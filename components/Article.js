import { View, Text} from 'react-native';
import { StyleSheet } from 'react-native';
import React from 'react'

export const Article = ({source}) => {
    const {title, date, content} = source
    return (
      <View style={styles.article}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
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

    article: {
        marginBottom: 10
    },
})
