import React from 'react'
import Search from './Search'
import TextArea from './TextArea'
import NoteList from './NoteList'
import {useSelector} from 'react-redux'

function Container() {
  const selectedColor = useSelector((item) => item.notes.selectedColor)
  return (
    <>
    <div className='container' style={{backgroundColor: selectedColor}}>
      <h1>Notes App</h1>
        <Search />
        <TextArea />
       
    </div>
    <NoteList />
    </>
  )
}

export default Container