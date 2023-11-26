import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import thunk from "redux-thunk"
import activeChatSlice from './slices/activeChatSlice'

export const store = configureStore({
   reducer: {
      userLoginInfo: userSlice,
      activeChatSlice: activeChatSlice
   },
   middleware: [thunk]
})