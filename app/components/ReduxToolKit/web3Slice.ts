import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IDrone {
  data: any;
  customerAddress: string;
}

const initialState: IDrone = {
  data: undefined,
  customerAddress: "",
};

export const Web3Slice = createSlice({
  name: "web3_slice",
  initialState,
  reducers: {
    setCustomerAddress: (state, action: PayloadAction<string>) => {
      state.customerAddress = action.payload;
    },
  },
});

export const { setCustomerAddress } = Web3Slice.actions;

export default Web3Slice.reducer;
