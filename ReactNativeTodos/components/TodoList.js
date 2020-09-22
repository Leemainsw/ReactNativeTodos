// components/TodoList.js
import React from 'react';
import TodoListItem from './TodoListItem';
import {StyleSheet, ScrollView, Text} from 'react-native';

const TodoList = ({todos}) => {
    return (
        <ScrollView contentContainerStyle={styles.listContainer}>
            {todos.map(todo => (
                <TodoListItem key={todo.id} {...todo} />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        alignItems: 'center',
    },
});

export default TodoList;