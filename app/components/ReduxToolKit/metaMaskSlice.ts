import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IDrone {
  data: any;
  currIndex: number;
}

const initialState: IDrone = {
  data: undefined,
  currIndex: 0,
};

export const MetamaskSlice = createSlice({
  name: "metamask_slice",
  initialState,
  reducers: {
    setMetamaskData: (state, action: PayloadAction<number>) => {
      state.currIndex = action.payload;
    },
  },
});

export const { setMetamaskData } = MetamaskSlice.actions;

export default MetamaskSlice.reducer;
