import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './CounterSlice.js'
import userReducer from './UserSlice.js'
import todo from '../pages/Todo.jsx';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
})

export default store;