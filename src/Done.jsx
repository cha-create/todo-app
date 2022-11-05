import React from 'react'; 
import DoneTask from './doneTask'; 

const Done = ({ doneTodos }) => 
{ 
  const deletedTodos = doneTodos.map((todo) => { 
    return ( 
      <DoneTask key={todo.id} title={todo.title} description={todo.description} /> 
    ); 
  }); 
    return ( 
      <div className='tasksDone'> 
        <div className='header'> 
          <h3>Tasks Done</h3> 
          <button className='clearFinishedTasks'>Clear Finished Tasks</button> 
        </div> 
        <hr /> 
          <div className='doneTasks-content'>
            {deletedTodos}
          </div> 
      </div> 
      ); 
};

export default Done;