import { createSlice } from "@reduxjs/toolkit";

const ToDoSlice = createSlice({
    name:'todo',
    initialState:{
        value: []
    },
    // reducers: {
    //     addPosts: {state, action} => {
    //         state.value.push(action.paylod)
    //     }
    // },
}
)