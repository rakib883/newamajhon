import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the type for the state
interface StateType {
  addData: any[];
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
   
    addCart: (state, action) => {
      const existData = state.cartData.find(item => item.id === action.payload.id);
      if (existData) {
        existData.quantity += 1;
      } else {
        state.cartData.push({ ...action.payload, quantity: 1 });
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
          inculedProduct.quantity ++
        }
    },
    productDecrement:(state,action)=>{
      const decrementData = state.cartData.find((item:any)=>item?.id === action?.payload?.id )
      if(decrementData?.quantity === 1){
          decrementData.quantity = 1
      }else{
        decrementData.quantity --
      }
    }
  },
});

// Action creators are generated for each case reducer function
export const { denimData,productIncrement,productDecrement, addCart,cartSingleDataRemove,resetCartItems } = counterSlice.actions;

export default counterSlice.reducer;
