"use client";

import React, { FC, ReactNode } from "react";
import { config, projectId } from "@/config";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { State, WagmiProvider } from "wagmi";


// const queryClient = new QueryClient();
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  }
});

if (!projectId) throw new Error("Project ID is not defined");


createWeb3Modal({
  wagmiConfig: config,
  projectId,
  // enableAnalytics: true, // Optional - defaults to your Cloud configuration
  // enableOnramp: true, // Optional - false as default
});



interface Web3ModalProviderProps {
  children: ReactNode;
  initialState?: State;
}
const Web3ModalProvider: FC<Web3ModalProviderProps> = ({
  children,
  initialState,
}) => {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
};

export default Web3ModalProvider;

