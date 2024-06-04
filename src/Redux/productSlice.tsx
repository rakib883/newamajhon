import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'Myproject',
  initialState: {
    addData :[],
    searchData :[]
  },
  reducers: {
    denimData:(state,action)=>{
       state.addData = action.payload
    },
    searchData:(state,action)=>{
         state.searchData = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const {denimData,searchData } = counterSlice.actions

export default counterSlice.reducer