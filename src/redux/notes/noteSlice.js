import { createSlice } from '@reduxjs/toolkit'


export const noteSlice = createSlice({
    name : "notes",
    initialState:{
        items:[
            {
                id: 1,
                text: 'Wash the dishes',
                color: '#f06292',
            },
            {
                id: 2,
                text: 'Go to the supermarket',
                color: '#ba68c8',
              },
              {
                id: 3,
                text: 'Drop your sibling to school',
                color: '#ffd54f',
              },
              {
                id: 4,
                text: 'Do your homeworks',
                color: '#4fc3f7',
              },
        ],
        input: '',
        selectedColor: '#aed581',
        filter: '',
    },
    reducers:{
        handleInput : (state,action)=>{
         state.input = action.payload.value;
        },
        handleColor:(state,action)=>{
            state.selectedColor = action.payload.value;
        },
        setFilter: (state, action) => {
            state.filter = action.payload.value;
        },
        addNewNotes : (state) =>{
            const lastTodo = state.items.at(-1);
            const lastID = lastTodo ? lastTodo.id : -1;
        
            state.items.push({
              id: lastID + 1,
              text: state.input,
              color: state.selectedColor,
            })
        }
    }
})

export const {addNewNotes ,handleInput,handleColor,setFilter} = noteSlice.actions
export default noteSlice.reducer