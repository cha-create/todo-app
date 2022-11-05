import React from 'react'

const DoneTask = ({task}) => {
  return (
    <div className='doneTask'>
        <div className="taskHeader">
            <p>{task.title}</p>
        </div>
        <hr/>
        <p>{task.description}</p>
    </div>
  )
}

export default DoneTask