import React from 'react';
import { StyleSheet, View } from 'react-native';

export const HorizontalRule = () => <View style={styles.hr} />;

const styles = StyleSheet.create({
    hr: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,  
        width: "100%",
        margin: 10
    }
})