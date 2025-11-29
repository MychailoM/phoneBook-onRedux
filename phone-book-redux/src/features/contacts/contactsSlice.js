import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        addContacts: {
            reducer(state, action){
                state.push(action.payload)
            }, 
            prepare(name, phone){
                return{payload: {
                    id: nanoid(),
                    name,
                    phone,
                }}
            }
        },
        deleteContacts(state, action){
            return state.filter(contact => contact.id !== action.payload);
        }
    }
});

export const {addContacts, deleteContacts} = contactsSlice.actions;
export default contactsSlice.reducer;


// const tasksReducer = tasksSlice.reducer;