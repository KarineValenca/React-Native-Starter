import React , { useState } from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import ColorCounter from '../components/ColorCounter'


const SquareScreen = () => {

    return (
        <View>
            <ColorCounter color="RED" />
            <ColorCounter color="GREEN"/>
            <ColorCounter color="BLUE"/>
        </View>
    )
}

const styles = StyleSheet.create({})

export default SquareScreen