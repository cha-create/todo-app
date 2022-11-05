import React from 'react'
import Task from './Task'

const ToDo = ({addTask, moveTask, todos}) => {
    return (
        <div className="ToDo">
            <div className="header">
                <h3>To-Do</h3>
                <div className="todoAddTask">
                    <h4>New Task</h4>
                    <input type="text" id="nameInputField" placeholder='Title' />
                    <textarea placeholder='Write your description here...'name="description" cols="22" rows="5" id="descriptionInputField"></textarea>
                    <button className='addTaskButton' onClick={() => addTask()}>+ Add Task</button>
                </div>
            </div>
            <hr/>
            <div className="ToDo-content">
                {todos.length > 0 ? (
                    todos.map((todo) => (
                        <Task task={todo} moveTask={moveTask} key={todo.id}/>
                    )
                        
                    )
                ) : (
                    <p className='noTasks'>No tasks so far</p>
                )}
            </div>
        </div>
    )
}


export default ToDo