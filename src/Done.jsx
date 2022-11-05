import React from 'react'
import DoneTask from './doneTask'
const Done = ({DoneTodos}) => {
  return (
    <div className='tasksDone'>
        <div className="header">
            <h3>Tasks Done</h3>
            <button className="clearFinishedTasks">Clear Finished Tasks</button>
        </div>
        <hr />
        <div className="doneTasks-content">
        {DoneTodos?.length > 0 ? (
          DoneTodos.forEach((todo) => (<DoneTask task={todo}/>))
        ): (
          <p className='noTasks'>No tasks so far</p>
        )}
        </div>
    </div>
  )
}

export default Done