import React from "react";


const Task = ({task, moveTask}) => {
  return (
    <div className="task">
        <div className="taskHeader">
          <p>{task.title}</p>
          <button className="taskMoveButton" onClick={() => moveTask(task.id)}>Task Done</button>
        </div>
        <hr/>
        <p>{task.description}</p>
    </div>

  )
}

export default Task