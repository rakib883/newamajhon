import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the type for the state
interface StateType {
  addData: any[];
  searchData: string;
  cartData:any[];
}

const initialState: StateType = {
  addData: [],
  searchData: "",
  cartData: [],
};

export const counterSlice = createSlice({
  name: 'Myproject',
  initialState,
  reducers: {
    denimData: (state, action: PayloadAction<any[]>) => {
      state.addData = action.payload;
    },
    setSearchData: (state, action: PayloadAction<string>) => {
      state.searchData = action.payload;
    },
    searchDataReset: (state) => {
      state.searchData = "";
    },
    addCart: (state, action: PayloadAction<{ id: number; quentity: number }>) => {
      const existData = state.cartData.find(item => item.id === action.payload.id);
      if (existData) {
        existData.quentity += 1;
      } else {
        state.cartData.push({ ...action.payload, quentity: 1 });
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { denimData, setSearchData, searchDataReset, addCart } = counterSlice.actions;

export default counterSlice.reducer;
