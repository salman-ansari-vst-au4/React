import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const Input = (props) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.input}
                value={props.todoInput}
                placeholder="   Input"
                onChangeText={(todoInput) => props.textChange(todoInput)} />
            <TouchableOpacity style={styles.addButton}
                onPress={props.addNewTodo}>
                <Text style={styles.addButtonText}>ADD</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowOffset: { width: 0, height: 3 },
        shadowColor: '#171717',
        shadowOpacity: .1
    },
    input: {
        backgroundColor: '#F3F3F3',
        flex: 1,
        fontSize: 18,
        height: 35
    },
    addButton: {
        width: 100,
        backgroundColor: '#3da3b8',
        alignItems: 'center',
        justifyContent: 'center'
    },
    addButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '400'
    }
})

export default Input