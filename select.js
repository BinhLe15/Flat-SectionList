import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

const ExeSelected = ({ selectedText }) => {
    return (
        <View style={styles.footerContainer}>
            <Text style={styles.Title}>SELECTED EXERCISES:</Text>
            <Text style={styles.selectTextt}>{selectedText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footerContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
        marginTop: 20,
        marginBottom: 10,
    },
    selectTextt: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    }
});


export default ExeSelected;