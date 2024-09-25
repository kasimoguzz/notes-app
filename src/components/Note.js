import React from 'react'

function Note({text , color}) {
  return (
    <div className='card' style={{backgroundColor: color}}>
      <p>
      {text}
      </p>
    </div>
  )
}

export default Note