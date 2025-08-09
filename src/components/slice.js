import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name: "list",
    initialState: [],
    reducers: {
        createList: (state, action) => {
            state.push(action.payload)
        },
        deleteList: (state, action) => {
            return state.filter((item, index) => index != action.payload)
        }
    }
})

export const { createList, deleteList } = slice.actions;
export default slice.reducer