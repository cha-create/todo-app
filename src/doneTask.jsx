import React from 'react'

const DoneTask = ({title, description}) => {
  return (
    <div className='doneTask'>
        <div className="taskHeader">
            <p>{title}</p>
        </div>
        <hr/>
        <p>{description}</p>
    </div>
  )
}

export default DoneTask