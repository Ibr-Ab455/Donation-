import { configureStore } from "@reduxjs/toolkit";
import userReducer from './api/UserSlice'

export const store = configureStore({
    reducer: {
     user: userReducer,
    }, 
})