// components/TodoList.js
import React from 'react';
import TodoListItem from './TodoListItem';
import {StyleSheet, ScrollView, Text} from 'react-native';

const TodoList = () => {
    return (
        <ScrollView contentContainerStyle={styles.listContainer}>
            <TodoListItem />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        alignItems: 'center',
    },
});

export default TodoList;