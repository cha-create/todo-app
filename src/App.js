import React from 'react';
import ToDo from './ToDo';
import Done from './Done';
import { useState } from 'react'
import uuid from 'react-uuid'
import './App.css';
const App = () => {
    const [todos, setTodos] = useState([]);
    const [doneTodos, setDoneTodos] = useState([]);
    const moveTask = (id) => {
        let qualifyingTodos = [];
        let movingTodos = [];
        todos.forEach((someTodos) => {if(someTodos.id === id) {movingTodos.push(someTodos)}});
        todos.forEach((todo) => {if(todo.id !== id) {qualifyingTodos.push(todo)}});
        setDoneTodos(doneTodos.concat(movingTodos));
        console.log(movingTodos);
        setTodos(qualifyingTodos);

    } 
    const addTask = () => {
        let taskTitle = document.getElementById('nameInputField').value;
        let taskDescription = document.getElementById('descriptionInputField').value;
        setTodos(todos.concat({
            id: uuid(),
            title: taskTitle,
            description: taskDescription
        }))
    }
    return (
        <div className='container'>
            <ToDo addTask={addTask} moveTask={moveTask} todos={todos}/>
            <Done doneTodos={doneTodos}/>
        </div>

    )

}

export default App