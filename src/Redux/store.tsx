import { configureStore } from '@reduxjs/toolkit'
import addData from "../Redux/productSlice"
export default configureStore({
  reducer: {
     allData:addData
  }
})