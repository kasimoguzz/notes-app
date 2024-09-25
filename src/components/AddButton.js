import {useDispatch} from 'react-redux'
import {addNewNotes} from '../redux/notes/noteSlice'

function AddButton() {
  const handleSubmit = ()=>{
    dispatch(addNewNotes())
  }
  const dispatch = useDispatch()
  return (
    <div className='buttonBox'>
        <button onClick={handleSubmit}>Add</button>
    </div>
  )
}

export default AddButton