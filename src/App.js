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
        const taskToMove = todos.find((todo) => todo.id === id); 
        const qualifyingTodos = todos.filter((todo) => todo.id !== id);
        setDoneTodos((prevDoneTodos) => [...prevDoneTodos, taskToMove]);
        setTodos(qualifyingTodos);
        console.log(doneTodos); 
      };
    const addTask = () => { 
        const newTodo = { 
            id: uuid(), 
            title: document.getElementById('nameInputField').value,
            description: document.getElementById('descriptionInputField').value, }; 
            setTodos((prevTodos) => { 
            return [...prevTodos, newTodo]; 
    }); 
    };
    return (
        <div className='container'>
            <ToDo addTask={addTask} moveTask={moveTask} todos={todos}/>
            <Done doneTodos={doneTodos}/>
        </div>

    )

}

export default App