import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import thunk from "redux-thunk"

export const store = configureStore({
   reducer: {
      userLoginInfo: userSlice
   },
   middleware:[thunk]
})