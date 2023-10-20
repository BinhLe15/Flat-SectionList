import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

const Button = ({ ButtonName, chooseExe }) => {
    const [btnSelect, setbtnSelect] = useState('SELECT');

    function handleSelect() {
        if (btnSelect == 'SELECT') {
            setbtnSelect('DESELECT');
            chooseExe(ButtonName);
        } else {
            setbtnSelect('SELECT');
            chooseExe('');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.Text}>{ButtonName}</Text>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText} onPress={handleSelect}>{btnSelect}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 60,
        backgroundColor: '#faf',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        margin: 'auto',
        marginTop: 10,
        backgroundColor: 'white',
    },
    Text: {
        marginLeft: 10,
        fontSize: 17,
        // fontStyle: 500,
        fontWeight: '500',

    },
    btn: {
        backgroundColor: '#5e95f2',
        width: '30%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    }
});

export default Button;