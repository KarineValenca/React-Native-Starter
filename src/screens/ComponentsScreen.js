import React from 'react'

import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
    const username = 'Karine'
    return (
    <View>
        <Text style={styles.textStyleTitle}>Getting started with react native!</Text>
        <Text style={styles.textStyleSubtitle}>My name is {username}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    textStyleTitle: {
        fontSize: 45
    },
    textStyleSubtitle: {
        fontSize: 20
    }
})

export default ComponentsScreen;