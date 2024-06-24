import { createSlice } from '@reduxjs/toolkit'



export const counterSlice = createSlice({
  name: 'Myproject',
  initialState: {
    addData :[],
    searchData :"",
    cartData:[],
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
    },
   

    // add cart are start 
    addCart:(state,action)=>{
      const existData = state.cartData.find((item:any)=>item.id === action.payload.id)
      if(existData){
        existData.quentity += 1;
      }else{
        state.cartData.push(action.payload)
      }
    }
    // add cart are end

  }
})

// Action creators are generated for each case reducer function
export const {denimData,searchData,searchDataReset,addCart} = counterSlice.actions

export default counterSlice.reducer