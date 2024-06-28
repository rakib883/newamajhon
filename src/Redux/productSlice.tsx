import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the type for the state
interface StateType {
  addData: any[];
  searchData: string;
  cartData:any[];
}

const initialState: StateType = {
  addData: [],
  cartData: [],
};

export const counterSlice = createSlice({
  name: 'Myproject',
  initialState,
  reducers: {
    denimData: (state, action: PayloadAction<any[]>) => {
      state.addData = action.payload;
    },
   
    addCart: (state, action: PayloadAction<{ id: number; quentity: number }>) => {
      const existData = state.cartData.find(item => item.id === action.payload.id);
      if (existData) {
        existData.quentity += 1;
      } else {
        state.cartData.push({ ...action.payload, quentity: 1 });
      }
    },
    cartSingleDataRemove:(state,action)=>{
      state.cartData = state.cartData.filter((item)=>item.id !== action.payload.id)
    },
    resetCartItems:(state)=>{
      state.cartData = []
    },
    productIncrement:(state,action)=>{
        const inculedProduct = state.cartData.find((item:any)=>item.id === action.payload.id)
        if(inculedProduct){
          inculedProduct.quentity ++
        }
    },
    productDecrement:(state,action)=>{
      const decrementData = state.cartData.find((item:any)=>item?.id === action?.payload?.id )
      if(decrementData?.quentity === 1){
          decrementData.quentity = 1
      }else{
        decrementData.quentity --
      }
    }
  },
});

// Action creators are generated for each case reducer function
export const { denimData,productIncrement,productDecrement, addCart,cartSingleDataRemove,resetCartItems } = counterSlice.actions;

export default counterSlice.reducer;
