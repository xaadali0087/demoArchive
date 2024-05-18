import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IDrone {
  data: any;
  currIndex: number;
}

const initialState: IDrone = {
  data: undefined,
  currIndex: 0,
};

export const DroneSlice = createSlice({
  name: "drone_slice",
  initialState,
  reducers: {
    changeCurrIndex: (state, action: PayloadAction<number>) => {
      state.currIndex = action.payload;
    },
  },
});

export const { changeCurrIndex } = DroneSlice.actions;

export default DroneSlice.reducer;
