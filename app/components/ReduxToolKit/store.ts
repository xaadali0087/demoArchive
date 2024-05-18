import { configureStore } from "@reduxjs/toolkit";
import { DroneSlice } from "./droneSlice";
import { droneAPI } from "./droneAPI";
import { Web3Slice } from "./web3Slice";
import { MetamaskSlice } from "./metaMaskSlice";

export const store = configureStore({
  reducer: {
    drones: DroneSlice.reducer,
    web3: Web3Slice.reducer,
    [droneAPI.reducerPath]: droneAPI.reducer,
    metamaskData: MetamaskSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([droneAPI.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
