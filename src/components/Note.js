import {useDispatch} from 'react-redux'
import {removeNote} from '../redux/notes/noteSlice'

function Note({id ,text , color}) {
  const dispatch = useDispatch()

  const handleRemove=()=>{
    if (window.confirm("are you sure")){
      dispatch(removeNote({id}))
    }
  }
  return (
    <div className='card' style={{backgroundColor: color}}>
      <div className='removeNotes' onClick={handleRemove}>
        ✖
      </div>
      <hr />
      <p>
      {text}
      </p>
    </div>
  )
}

export default Note