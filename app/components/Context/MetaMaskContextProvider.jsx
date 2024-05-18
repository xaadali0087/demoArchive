"use client"
import React, { FC, ReactNode } from "react";
import MetaMaskContext from "./MetaMaskContext";
import { ethers } from "ethers";


const MetaMaskContextProvider= ({ children }) => {
    const [metaMaskProvider, connectToMetaMask] = React.useState()
    return (
        <MetaMaskContext.Provider value={{metaMaskProvider, connectToMetaMask}}>
            {children}
        </MetaMaskContext.Provider>
    )
}

export default MetaMaskContextProvider;