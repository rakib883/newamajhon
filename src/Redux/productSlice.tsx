import { createSlice } from '@reduxjs/toolkit'



export const counterSlice = createSlice({
  name: 'Myproject',
  initialState: {
    addData :[],
    searchData :""
  },
  reducers: {
    denimData:(state,action)=>{
       state.addData = action.payload
    },
    searchData:(state,action)=>{
         state.searchData = action.payload
    },
    searchDataReset:(state,action)=>{
       state.searchData = ""
    }
  }
})

// Action creators are generated for each case reducer function
export const {denimData,searchData,searchDataReset} = counterSlice.actions

export default counterSlice.reducer